require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const router = require('./routes/index');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Routes API Indoor',
            version: '1.0.0',
            description: 'API documentation',
        },
        servers: [
            {
                url: process.env.SERVER_URL || 'http://localhost:8080',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/', router);

const port = process.env.SERVER_PORT || 8080;

app.listen(port, () => {
    console.log('Express server listening on port', port)
})

app.get('/', (req, res) => {
    res.status(200).json('Welcome, your app is working well');
})