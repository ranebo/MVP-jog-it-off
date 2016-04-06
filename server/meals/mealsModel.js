var mongoose = require('mongoose');

var MealSchema = new mongoose.Schema({
  guest: String,
  meal: String,
  calories: Number,
  speed: Number,
  weight: Number,
  miles: Number,
  mins: Number,
  time : { type : Date, default: Date.now }
});

module.exports = mongoose.model('Meal', MealSchema);
