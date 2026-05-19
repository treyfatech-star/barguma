import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Track Record', path: '/track-record' },
    { name: 'Vision & Agenda', path: '/vision-agenda' },
    { name: 'Projects', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-white">
              Hon. Hassan Mamman Barguma
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Serving Hong/Gombi with Honour. House of Representatives Aspirant, Hong/Gombi Federal Constituency, Adamawa State.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-lp-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">LP</span>
              </div>
              <span className="text-sm text-gray-300">Labour Party</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-white">Campaign Office</h4>
            <p className="text-gray-300 text-sm mb-4">
              Campaign Office: Hong, Adamawa State, Nigeria
            </p>
            <p className="text-gray-300 text-sm">
              Contact the campaign through the official office channels listed on the contact page.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs mb-4 md:mb-0">
              © {currentYear} Hon. Hassan Mamman Barguma. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs text-center md:text-right">
              Authorised by the Campaign Organisation of Hon. Hassan Mamman Barguma, Hong/Gombi Federal Constituency.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
