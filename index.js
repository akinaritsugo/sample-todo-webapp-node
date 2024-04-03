const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home/index');
});
app.use('/home', require('./routes/home'));
app.use('/todo', require('./routes/todo'));

app.listen(PORT, () => {
  console.log(`Now listening on: http://localhost:${PORT}`);
  console.log(`Application started. Press Ctrl+C to shut down.`);
});