# Image de base (doit contenir nginx)
FROM mika73100/newtest:latest

# Supprimer la config par défaut
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copier la config Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers statiques
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# ⚠️ Port >= 1024
EXPOSE 3000
