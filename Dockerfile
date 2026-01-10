# Utiliser l'image officielle Nginx
FROM nginx:alpine

# Supprimer la configuration par défaut de Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Rediriger les logs Nginx vers stdout/stderr pour Docker
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers statiques dans le répertoire de Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Exposer le port 3000
EXPOSE 3000

# Commande de démarrage avec logs
CMD ["sh", "-c", "echo 'Starting Nginx on port 3000...' && nginx -g 'daemon off;'"]
