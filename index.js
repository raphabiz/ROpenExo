const express =  require('express');
const app = express();
require('./models/dbConfig');
const bodyParser = require('body-parser');
const pieceRoutes = require('./routes/pieceController');
const modeleRoutes = require('./routes/modeleController');

app.use(bodyParser.json());

app.use('/piece',pieceRoutes);

app.use('/modele',modeleRoutes);

app.listen(5500 , () => console.log('server started : 5500') );