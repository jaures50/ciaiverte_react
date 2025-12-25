import { Outlet } from 'react-router-dom';
import type { ReactNode } from 'react';
import Navbar from './NavBar';
import Footer from './Header&Footer/Footer';
import Footers from './Footers';

// Si tu veux un Layout avec props enfants (alternative)
interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className='pt-22' >
        <Navbar />
      </div>
      {/* Contenu principal */}
      <main className="">
        {/* Outlet pour les routes OU children pour composition manuelle */}
        {children ? children : <Outlet />}
      </main>

      {/* Footers */}
        <Footers />

      
    </div>
  );
};

export default Layout;