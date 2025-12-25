import {  useEffect } from "react";

function Blogs() {

    useEffect(() => {
        document.title = 'Ciaivertes | Blogs';
    }, []);

    return (
        <section>
            {/* Page Title */}
            <div className="page-title bg-gradient-to-r from-green-600 to-green-800 text-white py-8 md:py-12">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">Blog</h1>
                    <nav className="breadcrumbs">
                        <ol className="flex items-center space-x-2 text-sm md:text-base">
                            <li>
                                <a href="index.html" className="text-green-100 hover:text-white transition-colors">Accueil</a>
                            </li>
                            <li className="text-green-300">/</li>
                            <li className="current font-medium text-white">Blog</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* End Page Title */}

            {/* Blog Posts Section */}
            <section id="blog-posts" className="blog-posts section py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Article 1 */}
                        <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="post-img relative overflow-hidden h-56">
                                <img
                                    src="assets/blog/blog_1.jpg"
                                    alt="Replantation à Dassa-Zoumè"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="post-content flex flex-col p-6">
                                <h3 className="post-title text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors">
                                    Ensemble, nous replantons l'espoir à Dassa-Zoumè !
                                </h3>
                                <div className="meta flex items-center mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <i className="bi bi-person mr-2"></i>
                                        <span className="text-sm">CIAI vertes</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Le 5 juin dernier, à l'occasion de la Journée mondiale de l'environnement, le Centre d'Incubation et
                                    d'Accélération des Initiatives Vertes (CIAI VERTES), appuyé par l'Association des Femmes pour le...
                                </p>
                                <hr className="border-gray-200 my-4" />
                                <a
                                    href="https://www.facebook.com/photo?fbid=122102138990895031&set=a.122098453796895031"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="readmore text-green-600 font-medium hover:text-green-800 transition-colors flex items-center mt-auto"
                                >
                                    <span>Voir plus</span>
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </article>
                        {/* End Article 1 */}

                        {/* Article 2 */}
                        <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="post-img relative overflow-hidden h-56">
                                <img
                                    src="assets/blog/Blog_2.jpg"
                                    alt="Pollution et santé"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="post-content flex flex-col p-6">
                                <h3 className="post-title text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors">
                                    Respirer la santé, pas la pollution !
                                </h3>
                                <div className="meta flex items-center mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <i className="bi bi-person mr-2"></i>
                                        <span className="text-sm">CIAI vertes</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Savez-vous que le gaz peut avoir des effets néfastes sur notre santé et notre environnement ? Les
                                    émissions de gaz à effet...
                                </p>
                                <hr className="border-gray-200 my-4" />
                                <a
                                    href="https://www.facebook.com/photo?fbid=122112815396895031&set=a.122098452926895031"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="readmore text-green-600 font-medium hover:text-green-800 transition-colors flex items-center mt-auto"
                                >
                                    <span>Voir plus</span>
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </article>
                        {/* End Article 2 */}

                        {/* Article 3 */}
                        <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="post-img relative overflow-hidden h-56">
                                <img
                                    src="assets/produits/produits-1.jpeg"
                                    alt="Charbon écologique"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="post-content flex flex-col p-6">
                                <h3 className="post-title text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors">
                                    Marre des dépenses élevées pour cuisiner ?
                                </h3>
                                <div className="meta flex items-center mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <i className="bi bi-person mr-2"></i>
                                        <span className="text-sm">CIAI vertes</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Vous n'avez pas 5 000 F pour recharger votre gaz, et le charbon classique n'est ni économique ni
                                    propre ? Voici la solution qu'il vous faut : le Charbon...
                                </p>
                                <hr className="border-gray-200 my-4" />
                                <a
                                    href="https://www.facebook.com/reel/1091321709589129"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="readmore text-green-600 font-medium hover:text-green-800 transition-colors flex items-center mt-auto"
                                >
                                    <span>Voir plus</span>
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </article>
                        {/* End Article 3 */}

                        {/* Article 4 */}
                        <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="post-img relative overflow-hidden h-56">
                                <img
                                    src="assets/about.jpg"
                                    alt="Visite terrain CIAI vertes-BRÜCKE"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="post-content flex flex-col p-6">
                                <h3 className="post-title text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors">
                                    Visite terrain CIAI vertes-BRÜCKE : transition énergétique inclusive réussie.
                                </h3>
                                <div className="meta flex items-center mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <i className="bi bi-person mr-2"></i>
                                        <span className="text-sm">CIAI vertes</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Les 21 et 22 mai 2025, CIAI vertes a eu l'immense honneur de recevoir son partenaire stratégique
                                    BRÜCKE Le PONT pour une visite de terrain à Dassa-Zoumè. Objectif ...
                                </p>
                                <hr className="border-gray-200 my-4" />
                                <a
                                    href="https://www.facebook.com/photo?fbid=122101328750895031&set=a.122098453796895031"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="readmore text-green-600 font-medium hover:text-green-800 transition-colors flex items-center mt-auto"
                                >
                                    <span>Voir plus</span>
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </article>
                        {/* End Article 4 */}

                        {/* Article 5 */}
                        <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="post-img relative overflow-hidden h-56">
                                <img
                                    src="assets/testimonials/cantines.png"
                                    alt="Produits écologiques"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="post-content flex flex-col p-6">
                                <h3 className="post-title text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors">
                                    Des produits sûrs, écologiques et sans inconvénients
                                </h3>
                                <div className="meta flex items-center mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <i className="bi bi-person mr-2"></i>
                                        <span className="text-sm">CIAI vertes</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Nos produits sont sans inconvénients, conçus avec soin, respectueux de l'environnement et parfaitement
                                    adaptés aux besoins modernes, garantissant confort, fiabilité et satisfaction durable à chaque
                                    utilisation quotidienne.
                                </p>
                                <hr className="border-gray-200 my-4" />
                                <a
                                    href="https://www.facebook.com/reel/2000389677160922"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="readmore text-green-600 font-medium hover:text-green-800 transition-colors flex items-center mt-auto"
                                >
                                    <span>Voir plus</span>
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </article>
                        {/* End Article 5 */}

                        {/* Article 6 */}
                        <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="post-img relative overflow-hidden h-56">
                                <img
                                    src="assets/blog/blog6.png"
                                    alt="Préservation des forêts"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="post-content flex flex-col p-6">
                                <h3 className="post-title text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors">
                                    Préservons nos forêts : un geste simple, un impact durable
                                </h3>
                                <div className="meta flex items-center mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <i className="bi bi-person mr-2"></i>
                                        <span className="text-sm">CIAI vertes</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    La déforestation menace nos forêts, notre climat et notre santé. Chaque jour, des arbres sont coupés
                                    massivement pour servir de bois de cuisson, une pratique qui met en péril...
                                </p>
                                <hr className="border-gray-200 my-4" />
                                <a
                                    href="https://www.facebook.com/photo?fbid=122101346462895031&set=a.122098452926895031"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="readmore text-green-600 font-medium hover:text-green-800 transition-colors flex items-center mt-auto"
                                >
                                    <span>Voir plus</span>
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </article>
                        {/* End Article 6 */}

                        {/* Article 7 */}
                        <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="post-img relative overflow-hidden h-56">
                                <img
                                    src="assets/produits/formation1.jpg"
                                    alt="Formation production de biochar"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="post-content flex flex-col p-6">
                                <h3 className="post-title text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors">
                                    Formation pratique et théorique pour startups en production de biochar et charbon écologique
                                </h3>
                                <div className="meta flex items-center mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <i className="bi bi-person mr-2"></i>
                                        <span className="text-sm">CIAI vertes</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    La session de formation théorique et pratique destinée aux startups en production de biochar et de
                                    charbon écologique offre une approche complète pour maîtriser l'ensemble des étapes de fabrication...
                                </p>
                                <hr className="border-gray-200 my-4" />
                                <a
                                    href="https://www.facebook.com/permalink.php?story_fbid=pfbid02nR7pLiUSwAbh2tj4ULEaoXvjtgooWqB1H3oVaxggFwVbNLKXmZ5pg2GCvHEb4GYnl&id=61576850941807"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="readmore text-green-600 font-medium hover:text-green-800 transition-colors flex items-center mt-auto"
                                >
                                    <span>Voir plus</span>
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </article>
                        {/* End Article 7 */}

                        {/* Article 8 */}
                        <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="post-img relative overflow-hidden h-56">
                                <img
                                    src="assets/blog/blog4.jpg"
                                    alt="Laboratoire de test"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="post-content flex flex-col p-6">
                                <h3 className="post-title text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors">
                                    Notre laboratoire de test et d'analyse de qualité
                                </h3>
                                <div className="meta flex items-center mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <i className="bi bi-person mr-2"></i>
                                        <span className="text-sm">CIAI vertes</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Notre laboratoire de test et d'analyse de qualité est au cœur de notre engagement pour l'excellence et
                                    la sécurité environnementale. Chaque produit que nous proposons, qu'il s'agisse de charbon....
                                </p>
                                <hr className="border-gray-200 my-4" />
                                <a
                                    href="https://www.facebook.com/permalink.php?story_fbid=pfbid0mTXmxnDKptR2biCMExHetxzXk8PT2i5kEsVA4GDzHb1JKeAb5Sk32jtW1YiccUFql&id=61576850941807"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="readmore text-green-600 font-medium hover:text-green-800 transition-colors flex items-center mt-auto"
                                >
                                    <span>Voir plus</span>
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </article>
                        {/* End Article 8 */}

                        {/* Article 9 - Vidéo */}
                        <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="post-img relative overflow-hidden">
                                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                                    <video
                                        className="w-full h-full object-contain"
                                        controls
                                    >
                                        <source src="assets/videos/video13.mp4" type="video/mp4" />
                                        Votre navigateur ne supporte pas la lecture de vidéos.
                                    </video>
                                </div>
                            </div>
                            <div className="post-content flex flex-col p-6">
                                <h3 className="post-title text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors">
                                    Foyers améliorés à ventilation solaire en action (vidéo)
                                </h3>
                                <div className="meta flex items-center mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <i className="bi bi-person mr-2"></i>
                                        <span className="text-sm">CIAI vertes</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Les foyers améliorés à ventilation solaire utilisent l'énergie solaire pour alimenter la ventilation,
                                    optimisant la combustion et réduisant les émissions de fumée. Ils permettent également de diminuer la
                                    consommation de combustible, tout en étant écologiques grâce à l'utilisation d'une source d'énergie
                                    renouvelable.
                                </p>
                                <hr className="border-gray-200 my-4" />
                                <div className="flex items-center text-green-600 font-medium">
                                    <i className="bi bi-play-circle mr-2"></i>
                                    <span>Vidéo disponible</span>
                                </div>
                            </div>
                        </article>
                        {/* End Article 9 */}

                        {/* Article 10 - Vidéo */}
                        <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="post-img relative overflow-hidden">
                                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                                    <video
                                        className="w-full h-full object-contain"
                                        controls
                                    >
                                        <source src="assets/videos/Ciaivertes.mp4" type="video/mp4" />
                                        Votre navigateur ne supporte pas la lecture de vidéos.
                                    </video>
                                </div>
                            </div>
                            <div className="post-content flex flex-col p-6">
                                <h3 className="post-title text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors">
                                    Présentation de CIAI vertes et composition du charbon écologique (vidéo)
                                </h3>
                                <div className="meta flex items-center mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <i className="bi bi-person mr-2"></i>
                                        <span className="text-sm">CIAI vertes</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Cette vidéo présente l'organisation CIAI vertes et détaille la composition de son charbon écologique.
                                    Fabriqué à partir de biomasse durable et de déchets agricoles transformés, ce combustible alternatif
                                    offre une solution énergétique propre et renouvelable, réduisant la dépendance au bois de chauffage
                                    traditionnel et limitant la déforestation.
                                </p>
                                <hr className="border-gray-200 my-4" />
                                <div className="flex items-center text-green-600 font-medium">
                                    <i className="bi bi-play-circle mr-2"></i>
                                    <span>Vidéo disponible</span>
                                </div>
                            </div>
                        </article>
                        {/* End Article 10 */}

                    </div>
                </div>
            </section>
        </section>
    );
}
export default Blogs;