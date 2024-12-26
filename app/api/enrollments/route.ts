import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

async function getSheet() {
  try {
    const SHEET_ID = process.env.SHEET_ID;
    const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const GOOGLE_SHEETS_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

    console.log('Checking credentials:', {
      hasSheetId: !!SHEET_ID,
      hasEmail: !!GOOGLE_SHEETS_CLIENT_EMAIL,
      hasKey: !!GOOGLE_SHEETS_PRIVATE_KEY?.length
    });

    if (!SHEET_ID || !GOOGLE_SHEETS_CLIENT_EMAIL || !GOOGLE_SHEETS_PRIVATE_KEY) {
      throw new Error('Missing Google Sheets configuration');
    }

    // Create JWT
    const jwt = new JWT({
      email: GOOGLE_SHEETS_CLIENT_EMAIL,
      key: GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    // Initialize sheet
    const doc = new GoogleSpreadsheet(SHEET_ID, jwt);
    await doc.loadInfo();
    console.log('Sheet loaded:', doc.title);

    const sheet = doc.sheetsByIndex[0];
    if (!sheet) {
      throw new Error('No sheet found');
    }

    // Load headers first
    await sheet.loadHeaderRow();
    console.log('Current headers:', sheet.headerValues);

    // Initialize headers if they don't exist
    if (!sheet.headerValues || sheet.headerValues.length === 0) {
      const headers = ['name', 'email', 'phone', 'city', 'created_at', 'status', 'amount'];
      await sheet.setHeaderRow(headers);
      console.log('Headers initialized:', headers);
    }

    return sheet;
  } catch (error) {
    console.error('Sheet initialization error:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    throw error;
  }
}

export async function GET() {
  try {
    const sheet = await getSheet();
    
    // Test sheet access
    const rows = await sheet.getRows({ limit: 1 });
    
    return NextResponse.json({ 
      status: 'healthy',
      sheetTitle: sheet.title,
      rowCount: sheet.rowCount,
      headers: sheet.headerValues,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check failed:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    return NextResponse.json(
      { 
        status: 'unhealthy',
        error: 'Service unavailable',
        details: error.message
      },
      { status: 503 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const sheet = await getSheet();
    const data = await req.json();

    console.log('Processing enrollment for:', data.email);

    // Validate data
    if (!data.name || !data.email || !data.phone || !data.city) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check for existing email
    const rows = await sheet.getRows();
    const existingEmail = rows.find(row => row.get('email') === data.email);
    
    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Add new enrollment
    const result = await sheet.addRow({
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      created_at: new Date().toISOString(),
      status: 'pending',
      amount: 999
    });

    console.log('Enrollment saved, row:', result._rowNumber);
    return NextResponse.json({ 
      success: true,
      rowNumber: result._rowNumber 
    });

  } catch (error) {
    console.error('API Error:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    return NextResponse.json(
      { 
        error: 'Failed to process enrollment',
        details: error.message
      },
      { status: 500 }
    );
  }
} 