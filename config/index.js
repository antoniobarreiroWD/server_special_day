const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const allowedOrigins = [
  process.env.ORIGIN, 
  'http://localhost:3000', 
  'https://front-special-day.vercel.app' 
];

module.exports = (app) => {
  app.set('trust proxy', 1);

  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
          var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'Content-Type,Authorization',
      preflightContinue: false,
      optionsSuccessStatus: 204
    })
  );

 
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://front-special-day.vercel.app');
    next();
  });

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  require('../passport')(app);

  app.options('*', cors());
};
