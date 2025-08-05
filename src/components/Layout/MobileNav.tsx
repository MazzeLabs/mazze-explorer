import Link from "next/link";
import { usePathname } from "next/navigation";
import Close from "../svgs/Close";
import { TransactionIcon } from "@/utils/icons";

interface MobileNavProps {
  open: boolean;
  setOpen: any;
  className?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen, className }) => {
  const pathname = usePathname();

  const navItems = [
    { 
      href: "/", 
      label: "Home", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
      )
    },
    { 
      href: "/transactions", 
      label: "Transactions", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    { 
      href: "/blocks", 
      label: "Blocks", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
        </svg>
      )
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}
      
      {/* Mobile Menu */}
      <div
        data-open={open}
        className={`fixed w-[300px] top-0 right-0 z-50 h-full data-[open=false]:translate-x-full transition-all duration-300 ease-in-out ${className ?? ""}`}
      >
        <div className="h-full bg-mazze-darkBlue/95 backdrop-blur-md border-l border-mazze-stroke/20">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-mazze-stroke/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-mazze-orange-gradient rounded-lg flex items-center justify-center">
                <TransactionIcon className="w-4 h-4 text-mazze-dark" />
              </div>
              <span className="font-bold text-white">Menu</span>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-mazze-darkBlueLight/50 transition-colors duration-200"
            >
              <Close className="text-white w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="p-6">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== "/" && pathname.startsWith(item.href));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-mazze-orange/10 border border-mazze-orange/30 text-mazze-orange' 
                        : 'text-white/80 hover:bg-mazze-darkBlueLight/50 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-mazze-orange rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="my-6 border-t border-mazze-stroke/20" />

            {/* Network Status */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-mazze-darkBlueLight/30">
              <span className="text-white/80 font-medium">Network</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-mazze-pulse" />
                <span className="text-white/60 text-sm">Devnet</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-mazze-stroke/20">
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">MazzeScan Explorer</p>
              <p className="text-white/40 text-xs">Powered by MazzeLabs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
