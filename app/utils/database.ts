import { createClient } from '@supabase/supabase-js';

// Ensure environment variables are available
const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables');
    return null;
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
};

const supabase = getSupabaseClient();

export interface EnrollmentData {
  name: string;
  email: string;
  phone: string;
  city: string;
  enrollmentDate: string;
  status: 'pending' | 'active' | 'cancelled';
  paymentId?: string;
  amount?: number;
}

export async function saveEnrollmentData(data: EnrollmentData) {
  if (!supabase) {
    throw new Error('Database connection not available');
  }
  
  try {
    // Add some basic validation
    if (!data.email || !data.phone || !data.name) {
      throw new Error('Missing required fields');
    }

    const { error, data: savedData } = await supabase
      .from('enrollments')
      .insert([{
        ...data,
        amount: 999,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        throw new Error('This email is already registered');
      }
      console.error('Error saving enrollment:', error);
      throw error;
    }

    console.log('Enrollment saved successfully:', {
      id: savedData.id,
      email: data.email,
      timestamp: new Date().toISOString()
    });

    return savedData;

  } catch (error) {
    console.error('Database operation failed:', error);
    throw error;
  }
}

// Add function to check if email already exists
export async function checkExistingEnrollment(email: string) {
  if (!supabase) {
    console.error('Database connection not available');
    return false;
  }
  
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .select('status, created_at')
      .eq('email', email)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned - this is expected for new users
        return false;
      }
      console.error('Error checking enrollment:', error);
      throw error;
    }

    if (data) {
      console.log('Found existing enrollment:', {
        email,
        status: data.status,
        created_at: data.created_at
      });
    }

    return !!data;
  } catch (error) {
    console.error('Database query failed:', error);
    // Return false instead of throwing to avoid breaking the enrollment flow
    return false;
  }
} 

if (typeof window === 'undefined') { // Only log on server
  console.log('Supabase URL:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('Supabase Key:', !!process.env.SUPABASE_SERVICE_KEY);
} 