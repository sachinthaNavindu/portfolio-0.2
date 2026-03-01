import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [active, setActive] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['about me', 'education', 'skills', 'projects'];

  const scrollToSection = (item:string) => {
    setActive(item);
    setMobileMenuOpen(false);
    const element = document.getElementById(item.replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-white/20 py-2' 
        : 'bg-black/80 backdrop-blur-sm border-b border-white/10 py-3 md:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <span className="text-white font-bold text-lg">SNF</span>
          </div>

          <ul className="hidden md:flex justify-center md:space-x-6 lg:space-x-12 mx-auto">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`relative text-sm lg:text-base capitalize transition-all duration-300 hover:text-white group ${
                    active === item ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                    active === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <ul className="flex flex-col space-y-3 pb-4">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`w-full text-left px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                    active === item 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;