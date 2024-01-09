# Utiliser une image de base Node.js version 14
FROM node:14

# Définir le répertoire de travail dans le conteneur comme "/app"
WORKDIR /app

# Copier les fichiers "package.json" et "package-lock.json" dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances Node.js en utilisant npm
RUN npm install

# Exposer le port 3000 pour les connexions entrantes
EXPOSE 3000

# Copier le reste des fichiers de l'application dans le répertoire de travail du conteneur
COPY . /app

# Commande pour démarrer l'application lorsque le conteneur est exécuté
CMD [ "npm", "run", "start"]
