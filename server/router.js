var mealsController = require('./meals/mealsController');

module.exports = function (app, express) {
  app.get("/api/meals", mealsController.allMeals);
  app.post("/api/meals", mealsController.addMeal);
};
