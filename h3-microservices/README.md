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

![Schema](https://cdn.discordapp.com/attachments/1145486495839432714/1194265903056027719/diagramme_microservice.jpg?ex=65afb9cb&is=659d44cb&hm=403435de94dee9ad472181e942969c11251de0bd8e01f2f14bc33e30cbc687bd&)


## Screenshots

1. **Afficher toutes les villes :**

- Depuis postman
![Postman](https://media.discordapp.net/attachments/1145486495839432714/1194266704033894520/CleanShot_2024-01-09_at_14.09.252x.png?ex=65afba8a&is=659d458a&hm=137672a396a5927160043bd3491390063f5d62fbdd06d1b01c4bb84458094f9c&=&format=webp&quality=lossless&width=1848&height=1208)

- Depuis le navigateur
  ![Postman](https://cdn.discordapp.com/attachments/1145486495839432714/1194267102811521034/CleanShot_2024-01-09_at_14.10.522x.png?ex=65afbae9&is=659d45e9&hm=711079ecc50cbbf6d601561c3b1be54a5ee31174bdc8b08e8da733d163448a05&)

2. **Créer une ville :**

![App Screenshot](https://cdn.discordapp.com/attachments/1145486495839432714/1194267568307961946/CleanShot_2024-01-09_at_14.12.442x.png?ex=65afbb58&is=659d4658&hm=00e232c431502f0fae88eee69d06e1b90717fc16a2c0de898a511eaa4526a21b&)
