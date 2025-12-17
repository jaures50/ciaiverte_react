import { Outlet } from 'react-router-dom';
import type { ReactNode } from 'react';
import Navbar from './NavBar';

// Si tu veux un Layout avec props enfants (alternative)
interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Contenu principal */}
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8">
        {/* Outlet pour les routes OU children pour composition manuelle */}
        {children ? children : <Outlet />}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MonApp. Tous droits réservés.</p>
          <p className="text-gray-400 text-xs mt-2">
            Développé avec React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;