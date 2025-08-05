"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import TextLogo from "../TextLogo";
import Logo from "../svgs/Logo";
import Hambuger from "../svgs/Hambuger";
import MobileNav from "./MobileNav";

const Header = () => {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const home = pathname === "/";

  const navItems = [
    { href: "/", label: "Home", active: home },
    { href: "/transactions", label: "Transactions", active: pathname.startsWith("/transactions") },
    { href: "/blocks", label: "Blocks", active: pathname.startsWith("/blocks") },
  ];

  return (
    <>
      <header className={`relative z-50 ${home ? 'bg-transparent' : 'bg-mazze-darkBlue/80 backdrop-blur-md border-b border-mazze-stroke/20'}`}>
        {/* Hero background for home page */}
        {home && (
          <div className="absolute inset-0 bg-mazze-gradient opacity-90 -z-10" />
        )}
        
        {/* Mazze branding glow effect */}
        {home && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-mazze-orange/20 rounded-full blur-3xl -z-10 overflow-hidden" />
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <Logo className="w-8 h-8 lg:w-10 lg:h-10 text-mazze-orange group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-mazze-orange/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="hidden sm:block">
                  <TextLogo />
                </div>
              </Link>
              
              {/* Network Status Badge */}
              <div className="hidden lg:flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-mazze-pulse" />
                <span className="text-sm text-white/70 font-medium">Devnet</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    item.active 
                      ? 'text-mazze-orange' 
                      : 'text-white/80 hover:text-mazze-orange'
                  }`}
                >
                  {item.label}
                  {item.active && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-mazze-orange-gradient rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-lg border border-mazze-stroke/30 hover:bg-mazze-darkBlueLight/50 transition-colors duration-200"
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open mobile menu"
              >
                <Hambuger className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <MobileNav open={mobileNavOpen} setOpen={setMobileNavOpen} />
    </>
  );
};

export default Header;
