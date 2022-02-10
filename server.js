const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');
const app = express();

const PORT = process.env.PORT || 7741;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(PORT, () => 
console.log(`App open, http://:localhost:${PORT}`)
);