const express =  require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/pieceController');
const bodyParser = require('body-parser');
