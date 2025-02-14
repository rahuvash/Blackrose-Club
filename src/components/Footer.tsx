'use client';

import Link from 'next/link';
import { Twitter, Instagram, Youtube, Disc as Discord } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-sm" />
              <span className="font-bold text-xl">Blackrose Club</span>
            </div>
            <p className="text-sm text-gray-400">
              Blackrose Club Targets The Most Active And Technology Savvy Target Group In The DACH
              Region And Will Later Expand To Serve The Global Market.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Discord className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Marketplace Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Imprint</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Become A Club Member</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Become A Shop Owner</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Become A Investor</Link></li>
            </ul>
          </div>

          {/* Head Quarter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Head Quarter</h3>
            <address className="text-gray-400 not-italic">
              <p>BLACKROSE CLUB LTD Victoria House,</p>
              <p>Suite 4949 Surrey Quays Road</p>
              <p>London SE16 7DX, United Kingdom</p>
              <div className="mt-4">
                <p>Blackrose Club Ltd</p>
                <p>Reg.nr: 3590402</p>
                <p>Number/Ust-ID: DE 225883316</p>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">Copyright © 2022 Blackrose Club</p>
            <div className="flex flex-wrap gap-4 text-center">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-sm">Home</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-sm">About</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-sm">Roadmap</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-sm">Services</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-sm">Team</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
