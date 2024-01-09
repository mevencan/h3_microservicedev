#!/bin/bash

# URL de la page que vous souhaitez tester
URL="http://localhost:80"  # Assurez-vous de spécifier la bonne URL

# Utilisez la commande curl pour récupérer le contenu de la page
response=$(curl -s -o /dev/null -w "%{http_code}" "$URL")

# Vérifiez le code HTTP de la réponse
if [ "$response" -eq 200 ]; then
  # La page a été chargée avec succès (code HTTP 200)
  echo "La page a été chargée avec succès."

  # Vérifiez si l'élément <h1> est présent dans le contenu de la page
  if curl -s "$URL" | grep -q "<h1>"; then
    echo "<h1> est présent sur la page."
  else
    echo "<h1> n'est pas présent sur la page."
  fi
else
  # La page n'a pas pu être chargée avec succès
  echo "Erreur : La page n'a pas pu être chargée (code HTTP $response)."
fi
