const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlMovies = require('../controllers/ctrlMovies'); // ... for the list of World Cup winners (countries)
const ctrlDirectors = require('../controllers/ctrlDirectors');

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/movies', ctrlMovies.winnerlist);  // List of World Cup winners (countries)
router.get('/directors', ctrlDirectors.winnerlist);  // List of Golden ball winners (players)

module.exports = router;