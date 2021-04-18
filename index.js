const express =  require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postController');
const bodyParser = require('body-parser');

const piecePerso = require('./routes/piecePersonnaliseController');
const modelePerso = require('./routes/modelePersonnaliseController');

app.use(bodyParser.json());
app.use('/admin',postsRoutes);

app.use('/piecePersonnalise',piecePerso);

app.use('/modelePersonnalise',modelePerso);

app.listen(5500 , () => console.log('server started : 5500') );
