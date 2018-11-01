const express = require('express');
const router = express.Router();

const ctrlApiMovies = require  ('../controllers/ctrlApiMovies');
const ctrlApiDirectors = require ('../controllers/ctrlApiDirectors');
router
    .route('/movies')
    .get(ctrlApiMovies.winnerList)
    .post(ctrlApiMovies.addWinner);

router
    .route('/directors')
    .get(ctrlApiDirectors.winnerList)
    .post(ctrlApiDirectors.addWinner);

module.exports = router;