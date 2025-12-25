import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons'



function Footers() {
    return (
        <section className='pt-5 w-full border ' >
            <footer id="footer" className="footer bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* Logo et Contact */}
                        <div className="md:col-span-5">
                            <div className="footer-about">
                                <a href="index.html" className="logo flex items-center mb-6">
                                    <span className="sitename text-2xl font-bold text-green-400">Ciaivertes</span>
                                </a>
                                <div className="footer-contact pt-3 space-y-3">
                                    <p className="text-gray-300">
                                        Abomey-Calavi/Akassato carrefour <br />
                                        après Erevan Ex-voie pavés KEREKOU
                                    </p>
                                    <p className="text-gray-300">À 100m du carrefour</p>
                                    <div className="mt-6 space-y-2">
                                        <p className="flex items-start">
                                            <strong className="text-green-400 mr-2">Phone:</strong>
                                            <span className="text-gray-300">
                                                +229 0162867073 / +229 0198357297 / +221 760246162
                                            </span>
                                        </p>
                                        <p className="flex items-start">
                                            <strong className="text-green-400 mr-2">Email:</strong>
                                            <span className="text-gray-300">ciaivert420@gmail.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Liens de navigation */}
                        <div className="md:col-span-3">
                            <div className="footer-links">
                                <h4 className="text-xl font-bold text-white mb-6 pb-2 border-b border-green-600">Liens</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                                        >
                                            <i className="bi bi-house-door mr-2"></i>
                                            Accueil
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about"
                                            className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                                        >
                                            <i className="bi bi-info-circle mr-2"></i>
                                            À propos
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/services"
                                            className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                                        >
                                            <i className="bi bi-briefcase mr-2"></i>
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/blog"
                                            className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                                        >
                                            <i className="bi bi-newspaper mr-2"></i>
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/contact"
                                            className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                                        >
                                            <i className="bi bi-envelope mr-2"></i>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="md:col-span-4">
                            <div className="footer-links">
                                <h4 className="text-xl font-bold text-white mb-6 pb-2 border-b border-green-600">Nos réseaux</h4>
                                <div className="social-links flex space-x-4 mt-6">
                                    <a
                                        href="https://x.com/AfeddaB?t=mJ10ghwOKLSOsIRW7d9WkG&s=09"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors group"
                                    >
                                        <FontAwesomeIcon icon={faXTwitter} style={{color: "#ffffff",}} />
                                        <i className="bi bi-twitter-x text-white text-xl group-hover:text-white"></i>
                                        <span className="sr-only">Twitter/X</span>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61576850941807"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group"
                                    >
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            style={{ color: '#ffffff' }}
                                        />

                                        <i className="bi bi-facebook text-white text-xl group-hover:text-white"></i>
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors group"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
                                        <i className="bi bi-linkedin text-white text-xl group-hover:text-white"></i>
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@afeddabenin9655"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
                                    >
                                        <FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} />
                                        <i className="bi bi-youtube text-white text-xl group-hover:text-white"></i>
                                        <span className="sr-only">YouTube</span>
                                    </a>
                                </div>

                                {/* Newsletter */}
                                {/*  <div className="mt-8 pt-6 border-t border-gray-700">
                                    <h5 className="text-lg font-medium text-white mb-4">Restez informé</h5>
                                    <div className="flex">
                                        <input
                                            type="email"
                                            placeholder="Votre email"
                                            className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        />
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors font-medium"
                                        >
                                            S'inscrire
                                        </button>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-2">
                                        Recevez nos dernières actualités et offres spéciales
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="container mx-auto px-4 py-6 border-t border-gray-800">
                    <div className="text-center">
                        <p className="text-gray-400">
                            © <span>Copyright</span> <strong className="px-1 sitename text-green-400">Ciaivertes</strong>
                            <span> Tous droits réservés</span>
                        </p>
                        <div className="credits mt-2">
                            <p className="text-gray-500 text-sm">
                                Développé par :
                                <a
                                    href="www.linkedin.com/in/jaurès-zogba-6a47282a3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-300 ml-1"
                                >
                                    Jaures ZOGBA
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}
export default Footers;