    const mongoose = require('mongoose');
    const moviesModel = mongoose.model('moviesWinner');

    const winnerList = function (req, res) {

        moviesModel.find({}, function (err, winners) {
            if (err) {
                res.status(404).json(err);
            }
            else {
                res.status(200).json(winners);
            }
        });
    };

const addWinner = function (req, res) {
    res
        .status(201)
        .json({"Add winner movie": "Work in progress"});
};

module.exports = {
    winnerList,
    addWinner
};