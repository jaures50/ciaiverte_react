import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    src: "https://ciaivertes.bj/assets/img/hero-carousel/hero_1.jpg",
    alt: "Forêt restaurée",
    title: "Reboiser, c'est bien plus que planter des arbres ",
    text: "C'est investir dans l'infrastructure naturelle de notre planète : chaque forêt restaurée devient un puits de carbone vital, une forteresse contre l'érosion, un régulateur du cycle de l'eau et le berceau d'une biodiversité retrouvée, essentielle à notre survie collective.",

  },
  {
    id: 2,
    src: "https://ciaivertes.bj/assets/img/hero-carousel/hero_2.jpg",
    alt: "Écosystème local",
    title: "Restaurer les écosystèmes locaux et lutter contre la déforestation",
    text: "Il ne s'agit pas seulement de planter des arbres, mais de redonner vie à des écosystèmes entiers. Chaque arbre planté joue un rôle crucial dans la restauration de l'équilibre naturel, soutenant la faune locale, améliorant la qualité de l'air et de l'eau, et renforçant la résilience des communautés face aux changements climatiques.",
  },
  {
    id: 3,
    src: "https://ciaivertes.bj/assets/img/hero-carousel/hero_3.jpg",
    alt: "Communauté engagée",
    title: "Chaque forêt préservée est une victoire pour notre avenir",
    text: "Proteger les massifs forestiers, c'est préserver notre avenir commun. Chaque arbre sauvegardé est un bouclier contre le changement climatique, un refuge pour la biodiversité et une source de bien-être pour les générations futures. Ensemble, nous pouvons faire la différence en protégeant ces trésors naturels indispensables.",
  }
];

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.title = 'Ciaivertes | Accueil';
  }, []);

  // Navigation automatique
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (<section>
    <div className="relative h-screen w-full overflow-hidden">
      {/* Conteneur du carrousel */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0'
              } ${isTransitioning ? 'transition-all' : ''}`}
          >
            {/* Image de fond en plein écran */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 h-full w-full object-cover object-right md:object-center"
            />
            <div className='  bg-gray-900/60 w-300 rounded-2xl h-50 mt-70  absolute mx-auto inset-0'>
              <h1 className=" text-white text-center font-bold pt-6 text-4xl ">
                {slide.title}
              </h1>
              <p className=" text-white text-center text-xl mx-0.5 pt-4">
                {slide.text}
              </p>
            </div>
            {/* Overlay pour améliorer la lisibilité */}
            <div className="absolute inset-0" />

            {/* Effets visuels décoratifs */}
            <div
              aria-hidden="true"
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1097/845 w-274.25 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1097/845 w-274.25 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Contenu texte */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Work with us
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-gray-300"
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70"
        aria-label="Slide précédent"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70"
        aria-label="Slide suivant"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicateurs de slide */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${index === currentSlide
              ? 'bg-white'
              : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Indicateur de slide actuel */}
      <div className="absolute right-4 top-4 z-30 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>


    {/* About Section */}
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row items-start gap-12">
          {/* Image Section */}
          <div
            className="lg:w-7/12 about-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="assets/about.jpg"
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
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 inner-title">
              À propos
            </h2>

            <div className="our-story">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Depuis 2021
              </h3>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700">
                  La dégradation accélérée de nos écosystèmes locaux et la disparition silencieuse de nos
                  forêts menacent directement notre avenir commun. CIAI VERTES, entreprise béninoise spécialisée dans la
                  production et la distribution de kits énergétiques — incluant des foyers à cuisson propres et du charbon
                  écologique — se positionne comme une alternative durable au bois énergie pour les ménages, cantines,
                  restaurants et hôtels. Notre action vise à lutter contre la déforestation et à réduire les émissions de
                  gaz à effet de serre en milieux ruraux, périurbains et urbains.
                </p>

                <p className="text-gray-700">
                  En parallèle, nous développons des solutions agroécologiques pour la valorisation des terres dégradées
                  et la culture hors sol grâce à la production de biofertilisants. Notre modèle économique repose sur
                  plusieurs axes : B2G, B2C et B2B.
                </p>
              </div>

              {/* List */}
              {/*  <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="bi bi-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">
                    Protéger les forêts anciennes et la biodiversité existante.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">
                    Restaurer les écosystèmes dégradés en replantant des essences indigènes.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">
                    Sensibiliser et mobiliser les communautés pour une gestion durable des ressources.
                  </span>
                </li>
              </ul>

              <p className="text-gray-700 mb-8">
                Notre mission se poursuit chaque jour, guidée par l'espoir et la certitude que, tous ensemble, nous
                pouvons infléchir le cours des choses et bâtir un avenir où nature et humanité prospèrent en harmonie.
              </p>
 */}
              <a
                href="/about"
                className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors rounded-2xl py-2 px-4"
              >
                Voir plus <i className="bi bi-play-circle btn btn ml-2 text-xl"></i>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Service Item 1 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full">
              {/* Background SVG */}
              <div className="absolute top-0 right-0 opacity-10">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="none"
                    strokeWidth="0"
                    fill="#0ea5e9"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                  <i className="bi bi-tree text-cyan-600 text-2xl"></i>
                </div>

                <a href="services.html" className="block mb-4 group-hover:text-cyan-600 transition-colors">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Restauration de zones forestières
                  </h3>
                </a>

                <p className="text-gray-600">
                  Programmes de reboisement et régénération d'écosystèmes dégradés avec des essences locales adaptées.
                </p>
              </div>
            </div>
          </div>

          {/* Service Item 2 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full">
              {/* Background SVG */}
              <div className="absolute top-0 right-0 opacity-10">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="none"
                    strokeWidth="0"
                    fill="#f97316"
                    d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <i className="bi bi-shield-check text-orange-600 text-2xl"></i>
                </div>

                <a href="services.html" className="block mb-4 group-hover:text-orange-600 transition-colors">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Protection des forêts primaires
                  </h3>
                </a>

                <p className="text-gray-600">
                  Surveillance active et actions concrètes contre la déforestation pour préserver les forêts anciennes.
                </p>
              </div>
            </div>
          </div>

          {/* Service Item 3 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full">
              {/* Background SVG */}
              <div className="absolute top-0 right-0 opacity-10">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="none"
                    strokeWidth="0"
                    fill="#0d9488"
                    d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <i className="bi bi-people text-teal-600 text-2xl"></i>
                </div>

                <a href="services.html" className="block mb-4 group-hover:text-teal-600 transition-colors">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Implication des communautés
                  </h3>
                </a>

                <p className="text-gray-600">
                  Sensibilisation, formation et mobilisation citoyenne pour une gestion durable des ressources naturelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Partenaires Section */}

    <div
      className="text-center max-w-3xl mx-auto mb-12"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
        Nos partenaires
      </h2>
      <p className="text-gray-600 text-lg">
        Notre action n'aurait pas autant d'impact sans l'engagement et le soutien de partenaires essentiels, tous
        unis autour d'une vision commune : préserver et restaurer les écosystèmes forestiers.
      </p>
    </div>
    <section className='py-9'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full  max-w-7xl mx-auto px-4  ">
        {/* Première colonne */}
        <div className="md:col-span-1  h-50 ">
          {/* Background effect */}
          <img src="assets/clients/client-14.png" alt=" Parrtenaire" />
        </div>

        {/* Deuxième colonne */}
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center " />

        {/* Première colonne */}
        <div className="md:col-span-1 ">
          {/* Background effect */}
          <img src="assets/clients/client-2.png" alt=" Parrtenaire" />
        </div>

        {/* Troisième colonne */}
        <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl">
          <section className="relative isolate overflow-hidden bg-black-1 px-6  sm:py-1 lg:px-6 mb-6">

            {/* Première colonne */}
            <div className="md:col-span-1 ">
              {/* Background effect */}
              <img src="assets/clients/client-3.png" alt=" Parrtenaire" />
            </div>
          </section>
        </div>
      </div>
      <div>

      </div>
    </section>
    <div className='text-end  ' >
      <a
        href="/produits-partenaires"
        className="inline-flex text-white items-center bg-green-700/90 font-semibold hover:text-green-800 transition-colors rounded-2xl py-2 px-4"
      >
        Voir plus <i className="bi bi-play-circle btn btn ml-2 text-xl text-end"></i>
      </a>
    </div>



  </section>
  );
}

export default Home;