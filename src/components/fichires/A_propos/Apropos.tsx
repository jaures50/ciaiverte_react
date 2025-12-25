function About() {
  return (
    <section>
      {/* Page Title */}
<div className="page-title bg-gradient-to-r from-green-600 to-green-800 text-white py-8 md:py-12">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">À propos</h1>
    <nav className="breadcrumbs">
      <ol className="flex items-center space-x-2 text-sm md:text-base">
        <li>
          <a href="index.html" className="text-green-100 hover:text-white transition-colors">Accueil</a>
        </li>
        <li className="text-green-300">/</li>
        <li className="current font-medium text-white">À propos</li>
      </ol>
    </nav>
  </div>
</div>
{/* End Page Title */}

{/* About Section */}
<section id="about" className="about section py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="relative flex flex-col lg:flex-row items-start gap-12">
      {/* Image Section */}
      <div 
        className="lg:w-7/12 about-img" 
        data-aos="zoom-out" 
        data-aos-delay="200"
      >
        <img 
          src="assets/about2.jpg"
          alt="À propos de CIAI VERTES"
          className="rounded-2xl shadow-lg w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div 
        className="lg:w-7/12" 
        data-aos="fade-up" 
        data-aos-delay="100"
      >
        <h2 className="inner-title text-3xl font-bold text-green-800 mb-6">À propos</h2>
        <div className="our-story">
          <div className="mb-4">
            <h4 className="text-lg text-gray-600">Depuis</h4>
            <h3 className="text-4xl font-bold text-green-700">2021</h3>
          </div>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              La dégradation accélérée de nos écosystèmes locaux et la disparition silencieuse de nos forêts menacent
              directement notre avenir commun. CIAI VERTES, entreprise béninoise spécialisée dans la production et la
              distribution de kits énergétiques — incluant des foyers à cuisson propres et du charbon écologique — se
              positionne comme une alternative durable au bois énergie pour les ménages, cantines, restaurants et
              hôtels. Notre action vise à lutter contre la déforestation et à réduire les émissions de gaz à effet de
              serre en milieux ruraux, périurbains et urbains.
            </p>
            
            <p className="text-gray-700">
              En parallèle, nous développons des solutions agroécologiques pour la valorisation des terres dégradées
              et la culture hors sol grâce à la production de biofertilisants. Notre modèle économique repose sur
              plusieurs axes : B2G, B2C et B2B.
            </p>
          </div>

          <div className="watch-video flex items-center relative mt-8">
            <i className="bi bi-play-circle text-green-600 text-3xl mr-3"></i>
            <a 
              href="https://www.youtube.com/watch?v=WdECYqyr0Gs" 
              className="glightbox stretched-link text-green-700 font-medium hover:text-green-800 transition-colors text-lg"
            >
              Regarder la vidéo
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Mission, Vision, Approche Section */}
    <div className="max-w-4xl mx-auto mt-16 space-y-8">
      {/* Mission */}
      <div className="bg-green-50 rounded-2xl p-8 shadow-lg border border-green-100">
        <h3 className="text-2xl font-bold text-green-800 text-center mb-6">Notre Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Nous croyons fermement que face à l'ampleur des défis environnementaux, l'action locale et concrète n'est
          pas une option, mais une nécessité absolue. <strong className="text-green-800">CIAI VERTES</strong> incarne l'espoir et devient un
          catalyseur de changement profond et durable, en restaurant activement les paysages et en s'opposant
          farouchement à la déforestation.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-emerald-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
        <h3 className="text-2xl font-bold text-green-800 text-center mb-6">Notre Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          Nous ne luttons pas seulement contre la déforestation ou l'érosion de la biodiversité : nous travaillons
          pour un monde où l'humain vit en harmonie avec la nature, où les forêts retrouvent leur vigueur et où
          chaque communauté bénéficie des services rendus par des écosystèmes en bonne santé. Nous imaginons des
          territoires résilients, où les rivières sont préservées, les sols fertiles, et où le chant des oiseaux et
          le bruissement des arbres redeviennent le fond sonore de nos environnements.
        </p>
      </div>

      {/* Approche */}
      <div className="bg-lime-50 rounded-2xl p-8 shadow-lg border border-lime-100">
        <h3 className="text-2xl font-bold text-green-800 text-center mb-6">Notre Approche</h3>
        <p className="text-gray-700 mb-6">
          Notre philosophie repose sur trois piliers :
        </p>
        
        <ol className="space-y-4 mb-8 pl-5">
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-1">1</span>
            <div>
              <strong className="text-green-800">Protéger avec vigueur</strong> : Défendre les forêts primaires et les espaces boisés existants
              contre la surexploitation et l'urbanisation.
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-1">2</span>
            <div>
              <strong className="text-green-800">Restaurer avec intelligence</strong> : Restaurer des écosystèmes entiers, choisir des essences
              locales adaptées, régénérer les sols et recréer des corridors biologiques pour la faune.
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-1">3</span>
            <div>
              <strong className="text-green-800">Impliquer avec passion</strong> : Mobiliser les communautés locales, citoyens, entreprises et
              institutions dans des projets collectifs, car la préservation du patrimoine naturel est une
              responsabilité partagée.
            </div>
          </li>
        </ol>
        
        <p className="text-gray-700 leading-relaxed">
          La régénération de la Terre est l'œuvre d'une vie. Chaque main tendue, chaque arbre planté, chaque forêt
          sauvée est une victoire. En soutenant <strong className="text-green-800">CIAI VERTES</strong>, vous investissez dans un avenir plus
          vert, plus juste et plus durable.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-xl font-bold text-green-800 italic border-t border-b border-green-200 py-4 px-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
          Ensemble, écrivons une nouvelle histoire pour notre planète, une forêt après l'autre.
        </p>
      </div>
    </div>
  </div>
</section>
{/* /About Section */}
    </section>
  );
}
export default About;