const data = require("./db");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/images',express.static('images'));

app.use(middlewares);
app.use(router);
 

// Server setup
app.listen(port, () => {
    console.log(`Running server on PORT ${port}...`);
  })