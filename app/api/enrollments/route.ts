import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Initialize Google Sheets
async function initializeSheets() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    return sheets;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Sheet initialization error:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
    } else {
      console.error('Unknown sheet initialization error:', error);
    }
    throw error;
  }
}

// Health check endpoint
export async function GET() {
  try {
    const sheets = await initializeSheets();
    
    // Test sheet access
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sheet1!A1:F1'
    });

    return NextResponse.json({ 
      status: 'healthy',
      headers: response.data.values?.[0] || []
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'unhealthy', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// Enrollment endpoint
export async function POST(request: Request) {
  try {
    const sheets = await initializeSheets();
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'city'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Append data to sheet with timestamp and status
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          body.name,
          body.email,
          body.phone,
          body.city,
          new Date().toISOString(),
          'pending'  // Status column
        ]]
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Enrollment error:', error instanceof Error ? {
      message: error.message,
      name: error.name,
      stack: error.stack
    } : error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process enrollment' },
      { status: 500 }
    );
  }
} 