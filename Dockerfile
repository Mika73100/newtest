# Utiliser l'image officielle Nginx
FROM nginx:alpine

# Copier les fichiers statiques dans le répertoire de Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80

# Nginx démarre automatiquement, pas besoin de CMD explicite

