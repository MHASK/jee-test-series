'use client';

import { useState } from 'react';
import Image from 'next/image';

interface EnrollmentFormProps {
  onClose: () => void;
}

declare global {
  interface Window {
    gtag?: (
      type: string,
      action: string,
      params?: {
        [key: string]: any;
      }
    ) => void;
  }
}

export default function EnrollmentForm({ onClose }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      // Track form submission
      if (window.gtag) {
        window.gtag('event', 'form_submission', {
          'event_category': 'enrollment',
          'event_label': 'JEE Test Series Enrollment'
        });
      }

      // Redirect to Razorpay with prefilled data
      const paymentUrl = new URL('https://rzp.io/l/tEYEGpT');
      paymentUrl.searchParams.append('prefill[email]', formData.email);
      paymentUrl.searchParams.append('prefill[contact]', formData.phone);
      paymentUrl.searchParams.append('prefill[name]', formData.name);
      
      // Track payment initiation
      if (window.gtag) {
        window.gtag('event', 'begin_checkout', {
          'event_category': 'ecommerce',
          'event_label': 'JEE Test Series Payment',
          'value': 999,
          'currency': 'INR',
          'items': [{
            'id': 'jee-test-series',
            'name': 'JEE Test Series',
            'price': '999',
            'quantity': 1
          }]
        });
      }
      
      window.location.href = paymentUrl.toString();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50" 
      onClick={onClose}
    >
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        <div 
          className="relative w-full max-w-md p-6 mx-auto my-8 text-left bg-white rounded-2xl shadow-xl transform transition-all max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Close button - Fixed position */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none z-10"
          >
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pr-8">
              Enroll Now
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Join our AI-powered JEE test series and start your preparation today.
            </p>
          </div>

          {/* Important Notice */}
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <span className="font-medium">⚠️ Important:</span> Please use the same email and phone 
              number for payment. Your account will be activated after payment verification.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-amber-600 text-xs">*use same for payment</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-amber-600 text-xs">*use same for payment</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="10-digit mobile number"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                value={formData.phone}
                onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                value={formData.city}
                onChange={e => setFormData(prev => ({ ...prev, city: e.target.value }))}
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm mt-2">
                {error}
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Proceed to Payment • ��999'}
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure payment powered by Razorpay</span>
            </div>
          </form>

          {/* Company Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              A product by Aikolumi Software PVT LTD
            </p>
          </div>

          {/* NEET App Promotion */}
          <div className="mt-6 p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border border-violet-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Lumi NEET"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-lg"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-violet-900">
                    Lumi AI for NEET
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-medium text-violet-600 bg-violet-100 rounded-full">
                    New
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Master NEET with AI-powered personalized learning, detailed performance analytics, and expert-curated content.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.aikolumi.neet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 2.047a1.93 1.93 0 0 0-.487.06L6.22 6.028a1.93 1.93 0 0 0-1.009 2.89L7.28 12l-2.069 3.083a1.93 1.93 0 0 0 1.009 2.89l10.816 3.92a1.93 1.93 0 0 0 2.514-1.972V4.02a1.93 1.93 0 0 0-2.027-1.973z"/>
                    </svg>
                    Download App
                  </a>
                  <span className="text-sm text-violet-600 font-medium">
                    4.8 ★ (10K+ reviews)
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    'Daily Tests',
                    'Video Solutions',
                    'Performance Analytics',
                    'Expert Support'
                  ].map((feature, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 text-xs font-medium text-violet-700 bg-violet-50 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 