import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

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
    const data = await req.json() as EnrollmentData;
    
    // Check if email exists
    const { data: existingUser } = await supabase
      .from('enrollments')
      .select('id')
      .eq('email', data.email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Save new enrollment
    const { error } = await supabase
      .from('enrollments')
      .insert([{
        ...data,
        amount: 999,
        created_at: new Date().toISOString()
      }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process enrollment' },
      { status: 500 }
    );
  }
}

// Add health check endpoint
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
        error: 'Database connection failed'
      },
      { status: 500 }
    );
  }
} 