const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({year:String, movie:String});
const directorsSchema = new mongoose.Schema({year:String, director:String, movie:String});

mongoose.model('moviesWinner', movieSchema, 'moviesWinners');
mongoose.model('directorsWinner', directorsSchema, 'directorsWinners');