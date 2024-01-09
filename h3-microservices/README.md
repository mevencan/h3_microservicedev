# H3-Micro-Service

## Architecture Prévue

Notre architecture microservices est composée des éléments suivants :

1. **Backend :** L'API backend est développée avec NodeJs pour créer des microservices qui gèrent la récupération et la mise à jour des données sur des zones avec leurs prix.

2. **Conteneurs Docker :** Notre projet comprend au moins deux fichiers Dockerfile, l'un pour le frontend et l'autre pour le backend. Nous utilisons Docker Compose pour orchestrer ces conteneurs.
3. **Front :** J'ai utiliser Nginx pour le front, il est configuré pour récupérer les données de l'app backend et les afficher sur le navigateur.

## Launch

Pour lancer le projet en local, il suffit de lancer la commande suivante :

```bash
  docker-compose up -d
```

## Schéma

![Schema](https://cdn.discordapp.com/attachments/1022814138021449829/1194296058973528104/image.png?ex=65afd5e1&is=659d60e1&hm=96c51fa779e6894d4922b97b7baff8c1430e85f4e0315fead7ab25aadd5004fb&)

## Screenshots

1. **Afficher toutes les villes :**

- Depuis postman
  ![Postman](https://cdn.discordapp.com/attachments/1022814138021449829/1194295503354081351/CleanShot_2024-01-09_at_16.03.522x.png?ex=65afd55c&is=659d605c&hm=ca1557e7c8cad8d44ee0799ff04527d353c9158ce6eba0fa84cedfae343d1861&)

- Depuis le navigateur
  ![Postman](https://cdn.discordapp.com/attachments/1022814138021449829/1194295843071721514/CleanShot_2024-01-09_at_16.05.112x.png?ex=65afd5ad&is=659d60ad&hm=3f89f06cf5269ceb65d9b86fa145cadbd0ecd6ba8886e86df684c1afad2cca5c&)

2. **Créer une ville :**

![App Screenshot](https://cdn.discordapp.com/attachments/1022814138021449829/1194295315268902972/CleanShot_2024-01-09_at_16.02.572x.png?ex=65afd530&is=659d6030&hm=c69a41067a76933d4ce375f777f09c9ecdb58e50c59462390f89ce6e103ce28d&)
