const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const app = express();
const path = require('path');
const router = express.Router();
const expressListRoutes   = require('express-list-routes');
const VenueListingModel = require('./models/venue');

require('dotenv').config({
  path: path.join(__dirname, './settings.env'),
});

app.use(bodyParser.json());
app.use(methodOverride());

app.use(function(req, res, next){
  const whitelist = ['localhost:8080'];
  const origin = req.headers.origin;

  whitelist.forEach(function(val, key){
    if (origin.indexOf(val) > -1){
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    }
  })

  next();
});

mongoose.connect(process.env.DATABASE_CONN);

restify.serve(router, VenueListingModel);

app.use(router);

expressListRoutes({}, 'Endpoints:', router );

app.listen(3000, () => {
  console.log('Metal Travel Guide API is running on http://localhost:3000');
});