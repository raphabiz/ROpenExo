const express =  require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/modeleController');
const bodyParser = require('body-parser');
