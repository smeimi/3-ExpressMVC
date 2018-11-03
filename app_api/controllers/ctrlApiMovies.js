    const mongoose = require('mongoose');
    const moviesModel = mongoose.model('moviesModel');

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
    moviesModel.create(req.body, function(err, newWinner) {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(201).json(newWinner);
            }
        }
    );
};

module.exports = {
    winnerList,
    addWinner
};