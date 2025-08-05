import Link from "next/link";
import TextLogo from "../TextLogo";
import Github from "../svgs/Github";
import Telegram from "../svgs/Telegram";
import X from "../svgs/X";
import ScrollTop from "../ScrollTop";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/MazzeLabs",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://t.me/MazzeLabs",
      icon: Telegram,
      label: "Telegram",
    },
    {
      href: "https://x.com/MazzeLabs",
      icon: X,
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { href: "/transactions", label: "Transactions" },
    { href: "/blocks", label: "Blocks" },
    { href: "/accounts", label: "Accounts" },
  ];

  return (
    <footer className="relative bg-mazze-darkBlue/80 backdrop-blur-md border-t border-mazze-stroke/20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-mazze-darkBlue to-transparent opacity-50" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollTop className="absolute top-4 right-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <TextLogo dark className="!text-2xl" />
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Explore the Mazze blockchain with real-time transaction data, block information, 
              and comprehensive network analytics. Fast, secure, and private.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-mazze-darkBlueLight/50 border border-mazze-stroke/30 hover:border-mazze-orange hover:bg-mazze-orange/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-mazze-orange transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-mazze-orange transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://mazze.io"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-mazze-orange transition-colors duration-300"
                >
                  Official Website
                </Link>
              </li>
              <li>
                <Link
                  href="https://status.mazze.io"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-mazze-orange transition-colors duration-300"
                >
                  Network Status
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.mazze.io"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-mazze-orange transition-colors duration-300"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-mazze-stroke/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © 2024 MazzeLabs. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-mazze-orange transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-mazze-orange transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
