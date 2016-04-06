var Q = require('q');
var Meal = require('./mealsModel.js');

var findAllMeals = Q.nbind(Meal.find, Meal);
var createMeal = Q.nbind(Meal.create, Meal);

module.exports = {
  allMeals: function(req, res, next) {
    findAllMeals({})
      .then(function (meals) {
        res.json(meals);
      })
      .fail(function (error) {
        next(error);
      });
  },

  addMeal: function(req, res, next) {
    var newMeal = {
      guest: req.body.guest,
      meal: req.body.meal,
      calories: req.body.calories,
      speed: req.body.speed,
      weight: req.body.weight,
      miles: req.body.miles,
      mins: req.body.mins,
    };
    createMeal(newMeal)
    .then( function(createdMeal) {
      if (createdMeal) {
        res.json(createdMeal);
      }
    })
    .fail( function (error) {
      next(error);
    });
  }
};
