const mongoose = require('mongoose');
const moviesModel = mongoose.model('moviesWinner');

const winnerList = function (req, res) {
    res
        .status(200)
        .json({"year" : "movie"});
};

const addWinner = function (req, res) {
    res.status(201).json({"Add winner" : "Work in progress"});
};
module.exports = {
    winnerList,
    addWinner
};