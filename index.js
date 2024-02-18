const express = require('express');
const session = require('express-session');

const app = express();

const HOST = 'http://localhost';
const PORT = 80;

app.use(express.static('public'));
app.set('views', 'views/pages');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: '68f26e35bb62bf0521606b4d912b062dae5c6b932deb999680a031db8bc9c58e',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/adm', require('./routes/adm'));

app.use((req, res, next) => res.status(404).render('404'));

app.listen(PORT, () => console.log(`\n\x1b[43;1m Funcionou!!! \x1b[0m Servidor está rodando no \x1b[4m${HOST}:${PORT}\x1b[0m\n`));
