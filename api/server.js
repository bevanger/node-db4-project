const express = require('express');

const RecipesRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = server;