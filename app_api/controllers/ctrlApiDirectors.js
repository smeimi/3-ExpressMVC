const mongoose = require('mongoose');
const directorsModel = mongoose.model('directorsModel');

const winnerList = function (req, res) {

    directorsModel.find({},function(err, winners){
        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(winners);
        }
    });
};

const addWinner = function (req, res) {
    directorsModel.create(req.body, function(err, newWinner){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newWinner);
            }
        }
    );
   // res.status(201).json({"Add winner" : "Work in progress"});
};
module.exports = {
    winnerList,
    addWinner
};