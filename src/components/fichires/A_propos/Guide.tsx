import { faCirclePlay, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Guide() {
    return (
        <section>

            {/* Page Title */}
            <div className="page-title bg-gradient-to-r from-green-600 to-green-800 text-white py-8 md:py-12">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">Guide d'utilisation</h1>
                    <nav className="breadcrumbs">
                        <ol className="flex items-center space-x-2 text-sm md:text-base">
                            <li>
                                <a href="index.html" className="text-green-100 hover:text-white transition-colors">Accueil</a>
                            </li>
                            <li className="text-green-300">/</li>
                            <li className="current font-medium text-white">Guide</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* End Page Title */}

            {/* Guide Section */}
            <section id="team" className="team section py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Guide PDF */}
                        <div data-aos="fade-up" data-aos-delay="100" className="flex">
                            <div className="card text-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full overflow-hidden">
                                <div className="card-body p-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FontAwesomeIcon icon={faFilePdf} style={{ color: "#000000", }} />                                    </div>
                                    <h5 className="card-title text-2xl font-bold text-green-700 mb-4">
                                        Guide d'utilisation du charbon écologique
                                    </h5>
                                    <p className="card-text text-gray-600 mb-8 leading-relaxed">
                                        Découvrez notre guide PDF d'allumage du charbon : conseils pratiques, simples et
                                        efficaces pour un allumage réussi.
                                        <br />
                                        Cliquez sur le bouton ci-dessous pour consulter immédiatement.
                                    </p>
                                    <a
                                        href="./assets/Mode_d_utilisation_du_charbon_ecologique_ciaivertes.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        📄 Voir le PDF
                                    </a>

                                    {/* Informations supplémentaires */}
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <div className="flex justify-center space-x-6 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <i className="bi bi-check-circle text-green-500 mr-2"></i>
                                                <span>Étapes détaillées</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="bi bi-check-circle text-green-500 mr-2"></i>
                                                <span>Conseils pratiques</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guide Video */}
                        <div data-aos="fade-up" data-aos-delay="200" className="flex">
                            <div className="card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full overflow-hidden">
                                <div className="card-body p-0">
                                    {/* Video Container */}
                                    <div className="relative aspect-video bg-gray-900">
                                        <video
                                            className="w-full h-full object-contain"
                                            controls
                                            poster="assets/img/video-thumbnail.jpg" // Optionnel: ajouter une miniature
                                        >
                                            <source src="assets/videos/video12.mp4" type="video/mp4" />
                                            Votre navigateur ne supporte pas la lecture de vidéos.
                                        </video>

                                    </div>

                                    {/* Video Info */}
                                    <div className="p-8">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                                <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#000000", }} />
                                            </div>
                                            <h5 className="card-title text-2xl font-bold text-green-700">
                                                Guide d'utilisation du charbon écologique (vidéo)
                                            </h5>
                                        </div>

                                        <p className="text-gray-600 mb-4">
                                            Visualisez notre tutoriel vidéo pour apprendre à utiliser efficacement notre charbon écologique.
                                        </p>

                                        {/* Video Details */}
                                        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                                            <div className="flex items-center text-gray-600">
                                                <i className="bi bi-clock-history text-green-500 mr-2"></i>
                                                <span>Durée: 33 secondes</span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <i className="bi bi-eye text-green-500 mr-2"></i>
                                                <span>Tutoriel pratique</span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <div className="flex flex-wrap gap-3 justify-center">
                                                <button
                                                    onClick={() => document.querySelector('video')?.play()}
                                                    className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                                                >
                                                    <i className="bi bi-play-fill mr-2"></i>
                                                    Lire la vidéo
                                                </button>
                                                <a
                                                    href="assets/videos/video12.mp4"
                                                    download
                                                    className="px-4 py-2 border border-green-600 text-green-600 text-sm font-medium rounded-lg hover:bg-green-50 transition-colors"
                                                >
                                                    <i className="bi bi-download mr-2"></i>
                                                    Télécharger
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </section>
    );
} export default Guide;