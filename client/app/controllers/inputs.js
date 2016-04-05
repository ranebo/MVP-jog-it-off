angular.module('MVP.controllers', [])
.controller("InputsController", function ($scope, Meals) {

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
  var m = "No meal added";

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
});
