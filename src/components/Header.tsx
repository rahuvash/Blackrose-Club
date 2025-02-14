'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#3DFF43] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">B</span>
              </div>
              <span className="font-semibold text-lg">Blackrose Club</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#3DFF43] transition-colors">
              HOME
            </Link>
            <Link href="/about" className="hover:text-[#3DFF43] transition-colors">
              ABOUT
            </Link>
            <Link href="/roadmap" className="hover:text-[#3DFF43] transition-colors">
              ROADMAP
            </Link>
            <Link href="/services" className="hover:text-[#3DFF43] transition-colors">
              SERVICES
            </Link>
            <Link href="/team" className="hover:text-[#3DFF43] transition-colors">
              TEAM
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#3DFF43] text-black hover:bg-[#32CC36] transition-colors">
              BECOME A SHOP OWNER
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#3DFF43] transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation('/')}
                className="hover:text-[#3DFF43] transition-colors text-left"
              >
                HOME
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="hover:text-[#3DFF43] transition-colors text-left"
              >
                ABOUT
              </button>
              <button
                onClick={() => handleNavigation('/roadmap')}
                className="hover:text-[#3DFF43] transition-colors text-left"
              >
                ROADMAP
              </button>
              <button
                onClick={() => handleNavigation('/services')}
                className="hover:text-[#3DFF43] transition-colors text-left"
              >
                SERVICES
              </button>
              <button
                onClick={() => handleNavigation('/team')}
                className="hover:text-[#3DFF43] transition-colors text-left"
              >
                TEAM
              </button>
              <Button className="bg-[#3DFF43] text-black hover:bg-[#32CC36] transition-colors w-full">
                BECOME A SHOP OWNER
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
