import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

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

    if (isMobile) {
        return (
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    {label}
                    <svg
                        className={`ml-2 h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                        {items.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }: { isActive: boolean }) =>
                                    `block px-3 py-2 rounded-md text-sm font-medium ${isActive
                                        ? 'bg-gray-700 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`
                                }
                                onClick={() => {
                                    setIsOpen(false);
                                    onItemClick?.();
                                }}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // Version Desktop
    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center transition-colors"
            >
                {label}
                <svg
                    className={`ml-1 h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                        {items.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }: { isActive: boolean }) =>
                                    `block px-4 py-2 text-sm transition-colors ${isActive
                                        ? 'bg-gray-700 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// Composant Navbar principal
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navLinks: NavLinkItem[] = [
        { type: 'link', to: '/', label: 'Accueil' },
        {
            type: 'dropdown',
            label: 'À propos',
            submenu: [
                { to: '/about/entreprise', label: 'Notre entreprise' },
                { to: '/about/equipe', label: 'Notre équipe' },
                { to: '/about/histoire', label: 'Notre histoire' },
                { to: '/about/valeurs', label: 'Nos valeurs' },
            ]
        },
        { type: 'link', to: '/contact', label: 'Contact' },
        { type: 'link', to: '/projects', label: 'Projets' },
        { type: 'link', to: '/blog', label: 'Blog' },
        { type: 'link', to: '/faq', label: 'FAQ' },
        { type: 'link', to: '/temoignages', label: 'Témoignages' },
        { type: 'link', to: '/careers', label: 'Carrières' },
    ];

    return (
        <nav className="bg-white text-black shadow-lg fixed top-0 left-0 right-0 z-50">            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between p-1.5">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <NavLink to="/" className="flex items-center">
                        <img
                            src="/assets/logo.png"
                            alt="Logo de l'entreprise"
                            className="h-20 w-auto"  // Ajuste la hauteur selon tes besoins
                        />
                        <span className="ml-2 text-3xl font-bold text-black">Ciaivertes</span>
                        {/* Optionnel : Ajouter un texte à côté du logo */}
                        {/* <span className="ml-2 text-xl font-bold text-white">MonApp</span> */}
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        {navLinks.map((link) => {
                            if (link.type === 'dropdown') {
                                return (
                                    <Dropdown
                                        key={link.label}
                                        label={link.label}
                                        items={link.submenu}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }: { isActive: boolean }) =>
                                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                            ? 'bg-gray-700 text-white'
                                            : 'text-black hover:bg-gray-700 hover:text-white'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Ouvrir le menu</span>
                        {/* Icon Hamburger */}
                        <svg
                            className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* Icon Close */}
                        <svg
                            className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (conditionnel) */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => {
                            if (link.type === 'dropdown') {
                                return (
                                    <Dropdown
                                        key={link.label}
                                        label={link.label}
                                        items={link.submenu}
                                        isMobile={true}
                                        onItemClick={() => setIsMenuOpen(false)}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }: { isActive: boolean }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                                            ? 'bg-gray-700 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
        </nav>
    );
};

export default Navbar;