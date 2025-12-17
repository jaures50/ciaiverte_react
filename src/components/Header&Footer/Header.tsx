import { Link } from "react-router-dom";

function Navbarss() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MonSite</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:underline">Accueil</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">À propos</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
        <Link to="/faq" className="hover:underline">FAQ</Link>
        <Link to="/testimonials" className="hover:underline">Témoignages</Link>
        <Link to="/careers" className="hover:underline">Carrières</Link>
      </div>
    </nav>
  )
}
export default Navbarss;
