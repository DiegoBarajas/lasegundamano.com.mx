const express = require('express');
const app = express();
require('dotenv').config();

const expressFileUpload = require('express-fileupload');
const apiLogsMiddleware = require('./middlewares/apiLogsMiddleware');
const errorsMiddleware = require('./middlewares/errorsMiddleware');

// Variables de servidor
app.set('PORT', process.env.PORT || 4000);

// Middlewares
app.use(express.json());
app.use(expressFileUpload());
app.use(apiLogsMiddleware);
app.use(errorsMiddleware);

// Routing
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

module.exports = app;