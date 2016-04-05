var underscore = angular.module('underscore', []);
  underscore.factory('_', function() {
      return window._;
  });
angular.module('MVP.controllers', [])
.controller("InputsController", function ($scope, Meals) {

  $scope.loggedIn = true;

//input variables
  $scope.getMeal;
  $scope.getCalories;
  $scope.getSpeed;
  $scope.getWeight;

//variables to display
  $scope.numCalories;
  $scope.jogSpeed;
  $scope.weight;
  $scope.showRuntime;

 //variables for formula: calories, speed, weight
 //and variable for post: min, miles, meal
  var c;
  var s;
  var w;
  var minToRun;
  var milesToRun;
  var m = "Something";

  $scope.updateMeal = function () {
    m = $scope.getMeal;
  };

  $scope.showCal = function() {
    if ($scope.getCalories) {
      $scope.numCalories = $scope.getCalories + " calories";
      c = $scope.getCalories;
      $scope.getCalories = undefined;
    }
  };

  $scope.showSpeed = function() {
    if ($scope.getSpeed) {
      $scope.jogSpeed = $scope.getSpeed + " mph";
      s = $scope.getSpeed;
      $scope.getSpeed = undefined;
    }
  };

  $scope.showWeight = function() {
    if ($scope.getWeight) {
      $scope.weight = $scope.getWeight + " lbs";
      w = $scope.getWeight;
      $scope.getWeight = undefined;
    }
  };

  $scope.findRuntime = function() {
  //results variables
    if (c && s && w) {
      //Conversion Coefficient = 89 ( lbs * miles * min )/ (cal * hr )
      //based off google search: 200lbs man running 8mph will burn 1074 calories (not very fancy)
      minToRun = Math.round((89 * c) / (s * w));
      milesToRun = Math.round((minToRun * s) / 60);
      var isManyMin = minToRun >= 60 ? "My God!" : "Hmmm.";
      var mileOrS = milesToRun > 1 ? "miles!" : "mile!";
      $scope.showRuntime = isManyMin + " You'll have to run for " + minToRun + " minutes, that means you'll run about " + milesToRun + " " + mileOrS;
    }
  };

  $scope.postMeal = function() {
    var meal = {
      meal: m,
      calories: c,
      speed: s,
      weight: w,
      miles: milesToRun,
      mins: minToRun
    };
    console.log("HELLO CLIENT SIDE MEALS", meal);
    Meals.addOne(JSON.stringify(meal))
    .then(function(data) {
      console.log(data);
      if (data) {
        meal = "No meal added";
      }
    });
  };
})
.controller("HistController", function ($scope, Meals, D3, allMeals) {

  $scope.allMeals = allMeals;

  $scope.calories = _.map(_.sortBy($scope.allMeals, function(meal) { return meal.time; }), function(meal) { return meal.calories; });

  $scope.minutes = _.map(_.sortBy($scope.allMeals, function(meal) { return meal.time; }), function(meal) { return meal.mins; });

  $scope.weight = _.map(_.sortBy($scope.allMeals, function(meal) { return meal.time; }), function(meal) { return meal.weight; });

  $scope.miles = _.map(_.sortBy($scope.allMeals, function(meal) { return meal.time; }), function(meal) { return meal.miles; });

  $scope.calChart = function() {
    D3.makeChart($scope.calories);
  };
  $scope.minChart = function() {
    D3.makeChart($scope.minutes);
  };
  $scope.weightChart = function() {
    D3.makeChart($scope.weight);
  };
  $scope.mileChart = function() {
    D3.makeChart($scope.miles);
  };

});
