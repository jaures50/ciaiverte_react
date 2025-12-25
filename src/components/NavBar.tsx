import { NavLink, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

// Interfaces TypeScript
interface DropdownItem {
  to: string;
  label: string;
}

interface NavLinkBase {
  label: string;
  type: 'link' | 'dropdown';
}

interface SimpleLink extends NavLinkBase {
  type: 'link';
  to: string;
}

interface DropdownLink extends NavLinkBase {
  type: 'dropdown';
  submenu: DropdownItem[];
}

type NavLinkItem = SimpleLink | DropdownLink;

// Constantes de couleurs
const COLORS = {
  primary: '#1d5d43',
  white: '#ffffff',
  hover: '#164933',
  lightGray: '#f8f9fa',
  darkText: '#333333',
} as const;

// Composant Dropdown
interface DropdownProps {
  label: string;
  items: DropdownItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

const Dropdown = ({ label, items, isMobile = false, onItemClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ferme le dropdown en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  const dropdownContent = useMemo(() => (
    items.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `block px-6 py-3 text-base transition-colors whitespace-nowrap min-w-[120px] ${isActive
            ? `bg-[${COLORS.primary}] text-white`
            : `text-[${COLORS.darkText}] hover:bg-[${COLORS.primary}] hover:text-white`
          }`
        }
        style={({ isActive }) => ({
          backgroundColor: isActive ? COLORS.primary : COLORS.white,
          color: isActive ? COLORS.white : COLORS.darkText,
        })}
        onClick={closeDropdown}
      >
        {item.label}
      </NavLink>
    ))
  ), [items, closeDropdown]);

  const mobileContent = useMemo(() => (
    items.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `block px-4 py-3 rounded-md text-base font-medium whitespace-nowrap ${isActive
            ? `bg-[${COLORS.primary}] text-white`
            : `text-[${COLORS.darkText}] hover:bg-[${COLORS.primary}] hover:text-white`
          }`
        }
        style={({ isActive }) => ({
          backgroundColor: isActive ? COLORS.primary : 'transparent',
          color: isActive ? COLORS.white : COLORS.darkText,
        })}
        onClick={() => {
          closeDropdown();
          onItemClick?.();
        }}
      >
        {item.label}
      </NavLink>
    ))
  ), [items, closeDropdown, onItemClick]);

  const ChevronIcon = useMemo(() => (
    <svg
      className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={isMobile ? 22 : 18}
      height={isMobile ? 22 : 18}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ), [isOpen, isMobile]);

  if (isMobile) {
    return (
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex justify-between items-center w-full px-4 py-3 rounded-md text-lg font-medium transition-colors"
          style={{
            color: COLORS.darkText,
            backgroundColor: isOpen ? COLORS.lightGray : 'transparent',
          }}
          aria-expanded={isOpen}
        >
          <span className="font-semibold">{label}</span>
          {ChevronIcon}
        </button>

        {isOpen && (
          <div className="ml-6 mt-2 space-y-2 animate-fadeIn border-l-2 border-[#1d5d43] pl-4">
            {mobileContent}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="px-5 py-3 rounded-md text-lg font-semibold flex items-center transition-colors duration-200 hover:shadow-md"
        style={{
          color: COLORS.darkText,
          backgroundColor: isOpen ? COLORS.lightGray : 'transparent',
        }}
        aria-expanded={isOpen}
      >
        {label}
        <span className="ml-2">{ChevronIcon}</span>
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 mt-1 rounded-lg shadow-xl z-50 animate-fadeIn border border-gray-200 overflow-hidden"
          style={{ 
            backgroundColor: COLORS.white,
            minWidth: '280px'
          }}
        >
          <div className="py-2">
            {dropdownContent}
          </div>
        </div>
      )}
    </div>
  );
};

// Hook personnalisé pour gérer la fermeture du menu mobile
const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Ferme le menu lors du changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return { isMenuOpen, toggleMenu, closeMenu };
};

// Hook personnalisé pour les classes actives
const useNavLinkClass = (isMobile = false) => {
  return useCallback(({ isActive }: { isActive: boolean }) => {
    const baseClasses = isMobile
      ? 'block px-2 py-2 rounded-md text-lg font-medium transition-all duration-200'
      : 'px-4 py-1 rounded-md text-lg font-semibold transition-all duration-200 hover:shadow-md';
    
    return baseClasses;
  }, [isMobile]);
};

// Composant Logo
const Logo = () => (
  <NavLink 
    to="/" 
    className="flex items-center hover:opacity-90 transition-opacity"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <img
      src="/assets/logo.png"
      alt="Logo Ciaivertes"
      className="h-20 w-auto"
      loading="eager"
    />
    <span 
      className="ml-3 text-3xl font-bold"
      style={{ color: COLORS.primary }}
    >
      Ciaivertes
    </span>
  </NavLink>
);

// Composant MobileMenuButton
interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => (
  <button
    onClick={onClick}
    className="md:hidden inline-flex items-center justify-center p-3 rounded-md transition-colors"
    style={{
      color: COLORS.primary,
      backgroundColor: COLORS.lightGray,
    }}
    aria-expanded={isOpen}
    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
  >
    {isOpen ? (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);
////////////////////////////////////////////////////////////////////
// Données de navigation avec labels complets
const NAV_LINKS: NavLinkItem[] = [
  { type: 'link', to: '/', label: 'Accueil' },
  {
    type: 'dropdown',
    label: 'À propos',
    submenu: [
      { to: '/about/equipe', label: 'Notre équipe' },
      { to: '/abouts', label: 'Notre histoire' },
      { to: '/temoignages', label: 'Témoignages' },
      { to: "/guide", label: "Guide d'utilisation de charbon MiMIN" },
      { to: '/produits-partenaires', label: 'Nos Produits & Partenaires' },
    ]
  },
  { type: 'link', to: '/services', label: 'Services' },
  { type: 'link', to: '/blogs', label: 'Blogs' },
  { type: 'link', to: '/contact', label: 'Contact' },
  { type: 'link', to: '/careers', label: 'Offres' },
];

// Composant DesktopNavLinks
const DesktopNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const getNavLinkClass = useNavLinkClass();

  return (
    <>
      {NAV_LINKS.map((link) => {
        if (link.type === 'dropdown') {
          return (
            <div key={`${link.label}-${link.type}`}>
              <Dropdown
                label={link.label}
                items={link.submenu}
              />
            </div>
          );
        }

        return (
          <NavLink
            key={link.to}
            to={link.to}
            className={getNavLinkClass}
            style={({ isActive }) => ({
              color: isActive ? COLORS.white : COLORS.darkText,
              backgroundColor: isActive ? COLORS.primary : 'transparent',
            })}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        );
      })}
    </>
  );
};

// Composant MobileNavLinks
const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const getMobileNavLinkClass = useNavLinkClass(true);

  return (
    <>
      {NAV_LINKS.map((link) => {
        if (link.type === 'dropdown') {
          return (
            <Dropdown
              key={`${link.label}-mobile`}
              label={link.label}
              items={link.submenu}
              isMobile={true}
              onItemClick={closeMenu}
            />
          );
        }

        return (
          <NavLink
            key={link.to}
            to={link.to}
            className={getMobileNavLinkClass}
            style={({ isActive }) => ({
              color: isActive ? COLORS.white : COLORS.darkText,
              backgroundColor: isActive ? COLORS.primary : 'transparent',
            })}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        );
      })}
    </>
  );
};

// Composant Navbar principal
const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <DesktopNavLinks closeMenu={closeMenu} />
            </div>
          </div>

          {/* Mobile menu button */}
          <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[600px] opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: COLORS.lightGray }}
        >
          <div className="space-y-3">
            <MobileNavLinks closeMenu={closeMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Ajout du style global pour les animations
const GlobalStyles = () => (
  <style>{`
    .animate-fadeIn {
      animation: fadeIn 0.25s ease-out;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Hover styles for desktop */
    @media (min-width: 768px) {
      a:hover {
        background-color: ${COLORS.primary} !important;
        color: ${COLORS.white} !important;
      }
      
      button:hover {
        background-color: ${COLORS.lightGray} !important;
      }
    }
  `}</style>
);

export default function NavbarWithStyles() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
    </>
  );
}