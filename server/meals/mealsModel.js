var mongoose = require('mongoose');

var MealSchema = new mongoose.Schema({
  meal: String,
  calories: Number,
  speed: Number,
  weight: Number,
  miles: Number,
  mins: Number,
  time : { type : Date, default: Date.now }
});
