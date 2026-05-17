import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Track Record', path: '/track-record' },
    { name: 'Vision & Agenda', path: '/vision-agenda' },
    { name: 'Projects', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {bannerVisible && (
        <div className="border-b border-gold/40 bg-gold">
          <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3">
            <Link
              to="/contact"
              className="flex-1 text-center font-playfair text-sm font-bold uppercase tracking-[0.18em] text-navy transition-opacity hover:opacity-80 md:text-lg"
            >
              Join The Team To Elect Hon. Hassan Mamman Barguma
            </Link>
            <button
              type="button"
              onClick={() => setBannerVisible(false)}
              className="shrink-0 rounded-sm p-1 text-navy transition-colors hover:bg-white/30"
              aria-label="Close banner"
            >
              <X size={22} />
            </button>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Labour Party logo"
              className="h-11 w-11 rounded-full object-cover shadow-sm"
            />
            <div className="max-w-[140px] sm:max-w-none">
              <p className="font-playfair font-bold text-navy text-xs sm:text-sm md:text-base leading-tight">
                Hon. Hassan Mamman
              </p>
              <p className="text-[11px] sm:text-xs text-lp-red font-medium">Barguma</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-lp-red ${
                  isActive(item.path) ? 'text-lp-red' : 'text-navy'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:block bg-lp-red text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            Join the Movement
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-navy" /> : <Menu size={24} className="text-navy" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-4 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-lp-red text-white'
                      : 'text-navy hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gold text-navy px-4 py-2 rounded-md text-sm font-medium text-center mt-4"
              >
                Join the Movement
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
