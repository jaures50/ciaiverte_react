function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Votre email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={4}
            placeholder="Votre message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
} 
export default Contact;