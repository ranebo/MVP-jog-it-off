angular.module('MVP.controllers', [])
.controller("InputsController", function ($scope) {

//input variables
  $scope.getCalories;
  $scope.getSpeed;
  $scope.getWeight;

//variables to display
  $scope.numCalories;
  $scope.jogSpeed;
  $scope.weight;
  $scope.showRuntime;

 //variables for formula: calories, speed, weight
  var c;
  var s;
  var w;

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
    var minToRun;
    var milesToRun;
    if (c && s && w) {
      //Conversion Coefficient = 89 ( lbs * miles * min )/ (cal * hr )
      minToRun = Math.round((89 * c) / (s * w));
      milesToRun = Math.round((minToRun * s) / 60);
      var isManyMin = minToRun >= 60 ? "My God!" : "Hmmm.";
      var mileOrS = milesToRun > 1 ? "miles!" : "mile!";
      $scope.showRuntime = isManyMin + " You'll have to run for " + minToRun + " minutes, that means you'll run about " + milesToRun + " " + mileOrS;
    }
  };
});
