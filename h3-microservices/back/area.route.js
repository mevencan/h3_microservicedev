// Importer le contrôleur de l'entité "Area" depuis "area.controller.js"
const AreaController = require("./area.controller")

// Importer le module Router d'Express
const { Router } = require("express");

// Créer une instance de routeur Express
const router = Router()

// Définir les routes associées aux fonctions du contrôleur "AreaController"

// Route GET pour récupérer toutes les "areas"
router.get("/areas", AreaController.areas)

// Route POST pour créer une nouvelle "area"
router.post("/areas/create", AreaController.create)

// Route PUT pour mettre à jour une "area" par son ID
router.put("/areas/update/:id", AreaController.update)

// Exporter le routeur pour l'utiliser dans d'autres parties de l'application
module.exports = router
