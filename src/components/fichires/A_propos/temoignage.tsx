import NavBars from "../../Header&Footer/NavBar";

function Temoignages() {
  return (
    <div className="container mx-auto px-4 py-8">
        <NavBars />
      <h2 className="text-3xl font-bold mb-6">Témoignages</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            "Ciaiverte a transformé notre façon de gérer les déchets. Leur équipe est professionnelle et dévouée."
          </p>
          <p className="text-sm text-gray-500">- Jean Dupont, CEO de GreenCorp</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            "Grâce à Ciaiverte, nous avons réduit nos coûts de gestion des déchets de 30% tout en améliorant notre impact environnemental."
          </p>
          <p className="text-sm text-gray-500">- Marie Curie, Directrice Environnement chez EcoSolutions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            "Leur service client est exceptionnel. Ils sont toujours prêts à aider et à trouver des solutions adaptées."
          </p>
          <p className="text-sm text-gray-500">- Alain Bernard, Responsable RSE chez BioTech</p>
        </div>
      </div>
    </div>
  );
}

export default Temoignages;