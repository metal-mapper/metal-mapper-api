const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const restify = require('express-restify-mongoose');
const app = express();
const router = express.Router();

require('dotenv').config({
  path: path.join(__dirname, './settings.env'),
});

const app = express();
mongoose.connect(process.env.DATABASE_CONN);
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Hello MongoDb!'));

app.listen(3000, () => console.log('It works!'));
