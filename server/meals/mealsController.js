var Q = require('q');
var Meal = require('./mealsModel.js');

var findAllMeals = Q.nbind(Meal.find, Meal);

module.exports = {
  allMeals: function(req, res, next) {
    findAllMeals({})
      .then(function (meals) {
        res.json(meals);
      })
      .fail(function (error) {
        next(error);
      });
  }
};
