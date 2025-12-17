function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mon  qcadcaApp. Tous droits réservés.</p>
        <p className="text-gray-400 text-xs mt-2">
          Développé avec React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;