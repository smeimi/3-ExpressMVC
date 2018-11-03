const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({year:String, movie:String});
const directorsSchema = new mongoose.Schema({year:String, director:String, movie:String});

mongoose.model('moviesModel', movieSchema, 'movies');
mongoose.model('directorsModel', directorsSchema, 'directors');