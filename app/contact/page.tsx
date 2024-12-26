'use client';

import SubPageNav from '../components/SubPageNav';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <SubPageNav />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team for support, feedback, or business inquiries.
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Company Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Lumi AI"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h2 className="font-semibold text-lg">Aikolumi Software PVT LTD</h2>
                  <p className="text-sm text-gray-500">Ed-tech Innovation</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Office Address</h3>
                  <p className="text-gray-600">
                    Aikolumi Software PVT LTD<br />
                    Kozhikode, Kerala<br />
                    India
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Support Email</h3>
                  <a 
                    href="mailto:hello@aikolumi.com"
                    className="text-violet-600 hover:text-violet-700"
                  >
                    hello@aikolumi.com
                  </a>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-violet-50 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Student Support', desc: 'Get help with your studies' },
                  { title: 'Technical Support', desc: 'Report technical issues' },
                  { title: 'Business Inquiries', desc: 'Partner with us' },
                  { title: 'Career Opportunities', desc: 'Join our team' }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl">
                    <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 