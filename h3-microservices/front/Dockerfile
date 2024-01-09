# Utilisation de l'image Docker NGINX la plus récente comme base
FROM nginx:latest

# Copier le fichier de configuration NGINX local dans le conteneur
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier tous les fichiers HTML et JavaScript du répertoire local dans le répertoire racine du serveur NGINX dans le conteneur
COPY . /usr/share/nginx/html

# Exposer le port par défaut de NGINX (généralement 80) pour les connexions entrantes
EXPOSE 80

# Commande pour démarrer NGINX (cette commande est généralement déjà configurée dans l'image NGINX)
CMD ["nginx", "-g", "daemon off;"]