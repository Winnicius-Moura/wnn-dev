# Usar uma imagem base do Node.js
FROM node:18 AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos da aplicação (incluindo a pasta src e public)
COPY . .

# Construir a aplicação
RUN npm run build

# Usar uma imagem base do Node.js para rodar o Next.js
FROM node:18 AS run

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de build e dependências
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3001

# Comando para iniciar o Next.js
CMD ["npm", "start"]