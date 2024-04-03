const route = require('express').Router();

route.get(['/', '/index'], (req, res) => {
  res.render('todo/index');
});

route.get('/create', (req, res) => {
  res.render('todo/create');
});

module.exports = route;