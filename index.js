const express =  require('express');
const app = express();
require('./models/dbConfig');
const bodyParser = require('body-parser');
const pieceRoutes = require('./routes/pieceController');
const modeleRoutes = require('./routes/modeleController');

const piecePerso = require('./routes/piecePersonnaliseController');
const modelePerso = require('./routes/modelePersonnaliseController');

app.use(bodyParser.json());

app.use('/piece',pieceRoutes);

app.use('/modele',modeleRoutes);
app.use('/admin',postsRoutes);

app.use('/piecePersonnalise',piecePerso);

app.use('/modelePersonnalise',modelePerso);

app.listen(5500 , () => console.log('server started : 5500') );
