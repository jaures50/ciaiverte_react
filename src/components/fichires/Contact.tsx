import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <section>
      {/* Page Title */}
      <div className="page-title bg-gradient-to-r from-green-600 to-green-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">Contact</h1>
          <nav className="breadcrumbs">
            <ol className="flex items-center space-x-2 text-sm md:text-base">
              <li>
                <a href="index.html" className="text-green-100 hover:text-white transition-colors">Accueil</a>
              </li>
              <li className="text-green-300">/</li>
              <li className="current font-medium text-white">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}

      {/* Contact Section */}
      <section id="contact" className="contact section py-16 bg-white">
        {/* Google Maps */}
        <div className="mb-12 px-4">
          <div className="container mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3186.4249201335206!2d2.18592!3d7.743929999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDQnMzguMiJOIDLCsDExJzA5LjMiRQ!5e1!3m2!1sfr!2sbj!4v1757069727527!5m2!1sfr!2sbj"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de CIAI VERTES"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
        {/* End Google Maps */}

        <div className="container mx-auto px-4" data-aos="fade">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Info Contact */}
            <div className="lg:col-span-4">
              <div className="info bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contactez-nous</h3>
                <p className="text-gray-600 mb-8">
                  Nous serions ravis de vous entendre ! Que vous ayez des questions, des suggestions ou que vous
                  souhaitiez collaborer avec CIAI VERTES, notre équipe est là pour vous répondre.
                </p>

                {/* Location Info */}
                <div className="info-item flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#000000", }} />
                    <i className="bi bi-geo-alt text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Localisation :</h4>
                    <p className="text-gray-600">
                      Dassa-Zoumé / Kpingni / Togon
                      <br />
                      À 100m non loin de la station JNP à côté des nouveaux bureaux administratifs.
                    </p>
                  </div>
                </div>
                {/* End Location Info */}

                {/* Email Info */}
                <div className="info-item flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000", }} />
                    <i className="bi bi-envelope text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email :</h4>
                    <p className="text-gray-600">
                      <a href="mailto:ciaivert420@gmail.com" className="hover:text-green-700 transition-colors">
                        ciaivert420@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* End Email Info */}

                {/* Phone Info */}
                <div className="info-item flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faPhone} style={{ color: "#000000", }} />
                    <i className="bi bi-phone text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Téléphone :</h4>
                    <p className="text-gray-600">
                      <a href="tel:+2290197932666" className="hover:text-green-700 transition-colors">
                        +229 0197932666
                      </a>
                      <br />
                      <a href="tel:+2290162867073" className="hover:text-green-700 transition-colors">
                        +229 0162867073
                      </a>
                    </p>
                  </div>
                </div>
                {/* End Phone Info */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <form
                  id="my-form"
                  action="https://formspree.io/f/xpwjdara"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                        placeholder="Votre Nom"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                        placeholder="Votre Email"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                      placeholder="Sujet"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-none"
                      placeholder="Votre message"
                      required
                    ></textarea>
                  </div>

                  {/* Loading and Status */}
                  <div className="my-4">
                    <div className="loading hidden text-center">
                      <div className="inline-flex items-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mr-3"></div>
                        <span className="text-gray-600">Envoi en cours...</span>
                      </div>
                    </div>
                    <p id="my-form-status" className="text-center"></p>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      id="my-form-button"
                      type="submit"
                      className="px-8 py-3 bg-green-600  font-medium rounded-lg hover:bg-green-700 text-black transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Envoyer le message

                      <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#000000", }} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </section>
  );
}
export default Contact;