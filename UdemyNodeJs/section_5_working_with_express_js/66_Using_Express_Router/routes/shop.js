const express = require('express');
const Router = express.Router();

Router.get('/', (req, res, next) => {
    res.send('<h1>hello from expresssss!</h1>');
});
module.exports = Router;
