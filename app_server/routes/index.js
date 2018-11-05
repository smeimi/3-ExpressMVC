const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain');
const ctrlMovies = require('../controllers/ctrlMovies');
const ctrlDirectors = require('../controllers/ctrlDirectors');

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/movies', ctrlMovies.winnerList);
router.get('/directors', ctrlDirectors.winnerList);

module.exports = router;