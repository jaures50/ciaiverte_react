import React from "react";
import type { FC } from "react";

interface Partner {
    id: number;
    name: string;
    logo: string;
}

const ProduitsPartenaires: FC = () => {
    const partners: Partner[] = [
        { id: 1, name: "Partenaire 1", logo: "/assets/clients/client-1.png" },
        { id: 2, name: "Partenaire 2", logo: "/assets/clients/client-2.png" },
        { id: 3, name: "Partenaire 3", logo: "/assets/clients/client-3.png" },
        { id: 4, name: "Partenaire 4", logo: "/assets/clients/client-4.png" },
        { id: 5, name: "Partenaire 5", logo: "/assets/clients/client-5.png" },
        { id: 6, name: "Partenaire 6", logo: "/assets/clients/client-6.png" },
        { id: 7, name: "Partenaire 7", logo: "/assets/clients/client-7.png" },
        { id: 8, name: "Partenaire 8", logo: "/assets/clients/client-8.png" },
        { id: 9, name: "Partenaire 9", logo: "/assets/clients/client-9.png" },
        { id: 10, name: "Partenaire 10", logo: "/assets/clients/client-10.jpeg" },
        { id: 11, name: "Partenaire 11", logo: "/assets/clients/client-11.jpeg" },
        { id: 12, name: "Partenaire 12", logo: "/assets/clients/client-12.png" },
        { id: 13, name: "Partenaire 13", logo: "/assets/clients/client-13.jpeg" },
        { id: 14, name: "Partenaire 14", logo: "/assets/clients/client-14.png" },
        { id: 15, name: "Partenaire 15", logo: "/assets/clients/client-15.jpeg" },
        { id: 16, name: "Partenaire 16", logo: "/assets/clients/client-16.jpg" },
        { id: 17, name: "Partenaire 17", logo: "/assets/clients/client-17.png" },
        { id: 18, name: "Partenaire 18", logo: "/assets/clients/client-18.png" }
    ];

    const produitsData = [
        {
            title: "Charbon écologique",
            images: [
                { src: "assets/produits/produits-1.jpeg", alt: "Charbon écologique 1" },
                { src: "assets/produits/alume_feu.jpg", alt: "Allume feu" },
                { src: "assets/produits/produits-3.jpg", alt: "Stock de charbon" }
            ],
            description: "1kg, 5kg, 30kg, ... Livraison disponible en ville",
            details: [
                "Charbon écologique pour cuisson rapide et propre",
                "Allume-feu pratique et écologique",
                "Disponible en plusieurs tailles"
            ]
        },
        {
            title: "Foyer à cuisson propre",
            images: [
                { src: "assets/blog/blogs_2.jpg", alt: "Foyer 1" },
                { src: "assets/produits/foyers.jpg", alt: "Foyer 2" },
                { src: "assets/produits/foyers2.jpg", alt: "Foyer 3" }
            ],
            description: "Foyers améliorés à ventilation optimisée : cuisson plus propre, consommation réduite et confort garanti.",
            details: [
                "Ventilation solaire améliorée",
                "Consommation réduite",
                "Confort de cuisson optimal"
            ]
        }
    ];

    const tarifsData = [
        {
            produit: "Foyer à cuisson propre",
            description: "Foyer améliorés à ventilation solaire",
            prix: "à partir de 60.000",
            lien: "https://wa.me/message/RIUKKR7UNNYOL1"
        },
        {
            produit: "Charbon écologique (AKAN MIMIN)",
            description: "Charbon écologique pour cuisson rapide et propre",
            prix: "150 / kg",
            lien: "https://wa.me/message/RIUKKR7UNNYOL1"
        },
        {
            produit: "Allume-feu écologique",
            description: "Allume-feu écologique pour cuisson rapide et propre",
            prix: "A partir de 100",
            lien: "https://wa.me/message/RIUKKR7UNNYOL1"
        }
    ];

    const servicesData = [
        {
            title: "Devenir Distributeur",
            description: "Rejoignez le réseau de CIAI VERTES et participez à la promotion du charbon écologique. Bénéficiez d'opportunités commerciales et contribuez à la protection de l'environnement.",
            lien: "https://forms.gle/ysSXomsAjhzA7C1z5",
            buttonText: "Postuler"
        },
        {
            title: "Commander nos Produits",
            description: "Commandez facilement nos Foyers à cuisson propre et/ou nos charbons écologique directement  via :",
            lien: "https://wa.me/message/RIUKKR7UNNYOL1",
            buttonText: "WhatsApp"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-white to-green-50">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                            Nos Produits Écologiques
                        </h1>
                        <p className="text-lg md:text-xl text-green-800">
                            Découvrez notre gamme de solutions durables pour une cuisson propre et respectueuse de l'environnement.
                            Nous collaborons avec des partenaires engagés pour offrir des alternatives écologiques innovantes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Produits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-green-900 mb-12">
                        Nos Produits
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {produitsData.map((produit, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-100"
                            >
                                {/* Carousel Container */}
                                <div className="relative h-64 md:h-72 bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden">
                                    <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out">
                                        {produit.images.map((img, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="min-w-full h-full flex items-center justify-center p-8"
                                            >
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Navigation Dots */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                        {produit.images.map((_, dotIndex) => (
                                            <button
                                                key={dotIndex}
                                                className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors"
                                                aria-label={`Voir l'image ${dotIndex + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Produit Info */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-green-900 mb-4">
                                        {produit.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {produit.description}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {produit.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tarifs Section */}
            <section className="py-16 bg-gradient-to-b from-white to-green-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-green-900 mb-12">
                        Nos Tarifs
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-8">
                                <div className="md:col-span-2">
                                    <h3 className="text-2xl font-bold text-green-900 mb-6">
                                        Produits & Services
                                    </h3>
                                    <p className="text-gray-600">
                                        Des solutions accessibles pour tous, avec des tarifs compétitifs et des options de distribution flexibles.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {tarifsData.map((tarif, index) => (
                                        <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-100">
                                            <h4 className="font-bold text-green-900 mb-2">
                                                {tarif.produit}
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-3">
                                                {tarif.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-2xl font-bold text-green-700">
                                                    {tarif.prix} FCFA
                                                </span>
                                                 <a
                                                    href={tarif.lien}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                                                >
                                                   Passer une commande
                                                </a> 
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-green-900 mb-12">
                        Nos Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            {index === 0 ? (
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            ) : (
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            )}
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-900">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 mb-8">
                                    {service.description}
                                </p>

                                <a
                                    href={service.lien}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors group"
                                >
                                    {service.buttonText}
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partenaires Section */}
            <section className="py-16 bg-gradient-to-b from-white to-green-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-green-900 mb-12">
                        Nos Partenaires
                    </h2>

                    <div className="max-w-6xl mx-auto">
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Nous travaillons avec des organisations partageant nos valeurs pour promouvoir
                            des solutions écologiques innovantes et durables.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                            {partners.map((partner) => (
                                <div
                                    key={partner.id}
                                    className="group bg-white rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-300 hover:scale-105"
                                >
                                    <div className="relative w-full h-25">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-green-50/0 via-green-50/0 to-green-50/0 group-hover:via-green-50/20 group-hover:to-green-50/40 transition-all duration-300 rounded-lg" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Rejoignez notre réseau écologique
                        </h2>
                        <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                            Ensemble, construisons un avenir plus durable avec des solutions de cuisson propres et accessibles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://forms.gle/ysSXomsAjhzA7C1z5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors"
                            >
                                Devenir Distributeur
                            </a>
                            <a
                                href="https://wa.me/message/RIUKKR7UNNYOL1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-green-800 text-white font-bold rounded-lg hover:bg-green-900 transition-colors"
                            >
                                Commander sur WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProduitsPartenaires;