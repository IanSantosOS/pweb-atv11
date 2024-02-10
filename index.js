const express = require('express');
const router = require('./src/router');
const app = express();

const HOST = 'http://localhost';
const PORT = 80;

app.use(express.static('src/public'));
app.set('views', 'src/views/pages');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(PORT, () => console.log(`\n\x1b[43;1m Funcionou!!! \x1b[0m Servidor está rodando no \x1b[4m${HOST}:${PORT}\x1b[0m\n`));
