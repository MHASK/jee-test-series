'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-3 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Footer */}
        <div className="hidden md:flex items-center justify-between">
          {/* Company Info */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Lumi AI"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg"
            />
            <div>
              <div className="text-sm font-medium">Aikolumi Software PVT LTD</div>
              <div className="text-xs text-gray-500">© 2024 All rights reserved</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-sm text-gray-600 hover:text-violet-600">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-violet-600">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-violet-600">
              Terms
            </Link>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Lumi AI"
                width={20}
                height={20}
                className="w-5 h-5 rounded-lg"
              />
              <div>
                <div className="text-xs font-medium">Aikolumi Software PVT LTD</div>
                <div className="text-xs text-gray-500">© 2024</div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center gap-4">
            <Link href="/contact" className="text-xs text-gray-600 hover:text-violet-600">
              Contact
            </Link>
            <Link href="/privacy" className="text-xs text-gray-600 hover:text-violet-600">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-gray-600 hover:text-violet-600">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 