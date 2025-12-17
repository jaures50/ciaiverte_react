import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/fichires/Acceuil';
import Contact from './components/fichires/Contact';
import About from './components/fichires/A_propos/Apropos';
import Projects from './components/fichires/A_propos/Equipes';
import NotFound from './components/fichires/erreurs_pages/page_not_found_404';
import Temoignages from './components/fichires/A_propos/temoignage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Toutes les routes partagent le même Layout */}
        <Route path="/" element={<Layout />}>
          {/* Ces routes s'afficheront dans l'Outlet du Layout */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="temoignages" element={<Temoignages />} />
          
          {/* Route 404 - doit être la dernière */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;