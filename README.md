
# API-Indoor-beacon

Esta é uma API para navegação em ambientes internos utilizando tecnologia de beacon.

## Visão Geral

A API foi desenvolvida para fornecer serviços de localização e navegação interna usando beacons. Pode ser usada em conjunto com aplicativos móveis para fornecer direções e informações em tempo real.

## Tecnologias Utilizadas

- **Linguagem:** JavaScript (Node.js)
- **Ambiente de Execução:** Node.js v21.7.1
- **Bibliotecas:**
  - `swagger-ui-express`
  - `express`
  - `nodemon`
  - `cors`
  - `dotenv`
  - `morgan`

## Estrutura do Projeto

- `/src`: Código fonte da API.
- `/config`: Arquivos de configuração.
- `/routes`: Definições de rotas.
- `/models`: Definições de modelos de dados.
- `app.js`: Ponto de entrada da aplicação.
- `package.json`: Gerenciamento de dependências.

## Pré-requisitos

Certifique-se de ter o Node.js v21.7.1 instalado. Você pode verificar sua versão do Node.js com o comando:
```bash
node -v
```

## Como Executar

1. Fazer clone a este repositório:
   ```bash
   git clone https://github.com/AAVANDRE10/API-Indoor-beacon.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd API-Indoor-beacon
   ```
3. Instalar as dependências:
   ```bash
   npm install swagger-ui-express
   npm install express nodemon cors dotenv morgan --save
   ```
4. Iniciar a aplicação:
   ```bash
   npm start
   ```

## Documentação da API

A documentação da API é fornecida pelo Swagger. Após iniciar a aplicação, acesse `http://localhost:3000/api-docs` para visualizar a documentação completa.
