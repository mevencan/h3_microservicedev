// Attendre que le chargement du document soit terminé
document.addEventListener("DOMContentLoaded", () => {
    // Obtenir l'élément HTML avec l'ID "city-list"
    const cityList = document.getElementById("city-list");

    // Effectuer une requête HTTP GET pour récupérer les données des villes depuis le backend
    fetch("http://localhost:3000/api/areas")
        .then(response => response.json()) // Convertir la réponse en JSON
        .then(data => {
            // Boucler à travers les données des villes
            data.forEach(city => {
                // Créer un élément de liste HTML pour chaque ville
                const listItem = document.createElement("li");
                // Définir le texte de l'élément de liste avec le nom de la ville et le prix (supposons que le prix est en dollars)
                listItem.textContent = `${city.name} - Prix : ${city.price} $`;
                // Ajouter l'élément de liste à la liste des villes
                cityList.appendChild(listItem);
            });
        })
        .catch(error => {
            // Gérer les erreurs en cas d'échec de la récupération des données
            console.error("Erreur lors de la récupération des données :", error);
        });
});
