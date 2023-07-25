# extraia a imagem base
FROM node:20.3.1-alpine3.17 

# defina o diretório de trabalho
WORKDIR /app 

# Excluir o diretório node_modules
RUN rm -rf node_modules 

# adicione o aplicativo
COPY . . 

# Instale as dependências usando o PNPM
RUN npm install -g yarn && \
    yarn install

# Execute o comando de build
RUN yarn build

# Expor a porta de desenvolvimento
EXPOSE 3000 

# iniciar o aplicativo
CMD [ "yarn" , "dev" ]