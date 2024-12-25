import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Check for environment variables
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
  throw new Error('Missing environment variables for Supabase configuration');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

interface EnrollmentData {
  name: string;
  email: string;
  phone: string;
  city: string;
  enrollmentDate: string;
  status: 'pending' | 'active' | 'cancelled';
}

export async function POST(req: NextRequest) {
  try {
    // Verify database connection
    const { error: connectionError } = await supabase.from('enrollments').select('count').limit(1);
    if (connectionError) {
      console.error('Database connection error:', connectionError);
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 503 }
      );
    }

    const data = await req.json() as EnrollmentData;
    
    // Check if email exists
    const { data: existingUser, error: lookupError } = await supabase
      .from('enrollments')
      .select('id')
      .eq('email', data.email)
      .single();

    if (lookupError && lookupError.code !== 'PGRST116') {
      throw lookupError;
    }

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Save new enrollment
    const { error: saveError } = await supabase
      .from('enrollments')
      .insert([{
        ...data,
        amount: 999,
        created_at: new Date().toISOString()
      }]);

    if (saveError) throw saveError;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process enrollment' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .select('count')
      .limit(1);

    if (error) throw error;

    return NextResponse.json({ 
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      { 
        status: 'unhealthy',
        error: 'Database connection failed',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 503 }
    );
  }
} 