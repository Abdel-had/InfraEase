FROM node:16-alpine as build
WORKDIR /app

# Copier uniquement les fichiers package.json et package-lock.json pour réduire le cache
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application
RUN npm run build

# Serveur Nginx pour servir les fichiers statiques
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
