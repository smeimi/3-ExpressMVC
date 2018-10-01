const mongoose = require('mongoose');

const dbURI = 'mongodb://dbuser:dbuser123@ds119663.mlab.com:19663/movies';

mongoose.connect(dbURI);

 mongoose.connection.on('connected', function(){
     console.log('Mongoose connected to ${dbURI}');
 });
 mongoose.connection.on('error', function(err){
     console.log('Mongoose connection error:', err);
 });
 mongoose.connection.on('disconnected',function(){
     console.log('Mongoose disconnected');
 });
 require('./appSchemas');