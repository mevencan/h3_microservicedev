// Importer le module mongoose pour la gestion de la base de données MongoDB
const mongoose = require("mongoose");

// Définir un schéma (structure) pour le modèle "Area"
const areaSchema = new mongoose.Schema({
    // Champ "name" de type String, requis (required) pour chaque document
    name: {
        type: String,
        required: true,
    },
    // Champ "price" de type Number, requis (required) pour chaque document
    price: {
        type: Number,
        required: true,
    },
});

// Exporter le modèle "Area" créé à partir du schéma areaSchema
module.exports = mongoose.model("Area", areaSchema);
