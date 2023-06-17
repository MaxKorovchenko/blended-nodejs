const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const { rootRouter } = require('./routes');
const { globalErrorHandler } = require('./middlewares/globalErrorHandler');
const { notFoundHandler } = require('./middlewares/notFoundHandler');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/', rootRouter);

app.use(notFoundHandler);

app.use(globalErrorHandler);

module.exports = { app };
