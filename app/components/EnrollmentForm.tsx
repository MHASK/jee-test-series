'use client';

import { useState } from 'react';

interface EnrollmentFormProps {
  onClose: () => void;
}

export default function EnrollmentForm({ onClose }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save enrollment data via API
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          enrollmentDate: new Date().toISOString(),
          status: 'pending'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to save enrollment');
      }

      // Add user details to payment link as URL parameters
      const paymentUrl = new URL('https://rzp.io/rzp/tEYEGpT');
      paymentUrl.searchParams.append('prefill[email]', formData.email);
      paymentUrl.searchParams.append('prefill[contact]', formData.phone);
      paymentUrl.searchParams.append('prefill[name]', formData.name);
      
      // Redirect to Razorpay payment link
      window.location.href = paymentUrl.toString();
    } catch (error) {
      console.error('Error processing enrollment:', error);
      alert(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Enroll Now</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800 font-medium mb-2">⚠️ Important:</p>
          <p className="text-sm text-amber-700">
            Please use the same email and phone number in the payment page. 
            Your account will only be activated if the details match.
          </p>
        </div>

        <div className="mb-6 p-4 bg-violet-50 rounded-lg">
          <p className="text-sm text-violet-700">
            <span className="font-medium">How it works:</span>
            <br />
            1. Fill in your details below
            <br />
            2. Complete the payment with the same email & phone
            <br />
            3. Your account will be activated within 10 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
              <span className="text-amber-600 ml-1">*use same email for payment</span>
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
              <span className="text-amber-600 ml-1">*use same number for payment</span>
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="10-digit mobile number"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </div>

          <div className="text-sm text-gray-500 mt-4">
            <p className="mb-2">After payment, you'll receive an email with further instructions.</p>
            <p className="text-amber-600 font-medium">
              Note: Account activation may be delayed if payment details don't match.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>All payments are processed on a secure payment gateway</span>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-colors font-medium"
          >
            Proceed to Payment • ₹999
          </button>
        </form>
      </div>
    </div>
  );
} 