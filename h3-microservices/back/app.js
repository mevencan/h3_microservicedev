// Importer le module Express pour créer l'application backend
const express = require("express")

// Charger les variables d'environnement à partir du fichier .env
require("dotenv").config()

// Définir le numéro de port sur 3000
const port = 3000

// Créer une instance d'application Express
const app = express()

// Importer le module CORS pour gérer les autorisations de requêtes
const cors = require("cors")

// Importer le module Mongoose pour la communication avec MongoDB
const mongoose = require("mongoose")

// Importer les routes de l'application depuis le fichier "area.route.js"
const routes = require("./area.route")

// Utiliser le middleware pour gérer les requêtes JSON
app.use(express.json())

// Utiliser le middleware CORS pour autoriser les requêtes entre domaines
app.use(cors())

// Se connecter à la base de données MongoDB en utilisant Mongoose
mongoose
    .connect("mongodb://root:root@mongo:27017")
    .then(() => console.log("Connexion à la BDD Mongo réussie")) // Message de succès en cas de connexion réussie
    .catch((error) => console.log(error)) // Gérer les erreurs en cas d'échec de la connexion

// Utiliser les routes définies dans "area.route.js" sous le préfixe "/api"
app.use("/api", routes)

// Écouter les requêtes entrantes sur le port spécifié (0.0.0.0 signifie toutes les interfaces réseau)
app.listen(port, '0.0.0.0', () => {
    // Afficher un message lorsque le serveur démarre
    console.log(`Le serveur fonctionne sur le port ${port}`)
})
