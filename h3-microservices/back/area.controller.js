// Importer le modèle d'Area depuis "area.model.js"
const AreaModel = require("./area.model")

// Fonction pour créer une nouvelle area
const create = async (req, res) => {
    // Extraire les données (name et price) de la requête HTTP
    const { name, price } = req.body

    // Créer une nouvelle area en utilisant le modèle AreaModel
    AreaModel.create({ name, price })
        .then((data) => {
            // En cas de succès, afficher un message de réussite et renvoyer les données créées
            console.log("Création de l'area")
            res.status(201).send(data)
        })
        .catch((error) => {
            // En cas d'erreur, afficher l'erreur et renvoyer un message d'erreur
            console.error(error)
            res.send({ msg: "Erreur lors de la création de area !", error: error })
        });
}

// Fonction pour récupérer toutes les areas
const areas = async (req, res) => {
    try {
        // Utiliser le modèle AreaModel pour rechercher toutes les areas
        const areas = await AreaModel.find()
        res.json(areas)
    } catch (error) {
        // En cas d'erreur, afficher l'erreur et renvoyer un message d'erreur avec le code HTTP 500 (Internal Server Error)
        console.error('Erreur lors de la récupération des areas :', error)
        res.status(500).json({ error: 'Erreur lors de la récupération des areas !' })
    }
}

// Fonction pour mettre à jour une area existante
const update = async (req, res) => {
    // Extraire l'ID de l'area à mettre à jour depuis les paramètres de la requête
    const { id } = req.params
    // Extraire les données (name et price) de la requête HTTP
    const { name, price } = req.body

    // Utiliser le modèle AreaModel pour mettre à jour l'area par son ID
    AreaModel.findByIdAndUpdate(id, { name, price })
        .then(() => {
            // En cas de succès, renvoyer un message de réussite
            res.send("Area mis à jour")
        })
        .catch((err) => {
            // En cas d'erreur, afficher l'erreur et renvoyer un message d'erreur
            console.log(err)
            res.send({ error: err, msg: "Erreur lors de l'update de l'area !" })
        });
}

// Exporter les fonctions pour les utiliser dans d'autres parties de l'application
module.exports = {
    create,
    areas,
    update,
};
