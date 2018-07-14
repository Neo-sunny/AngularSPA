(function(){
'use strict';

angular.module("LunchApp",[])

.controller("FoodController", FoodController);

FoodController.$inject = ['$scope'];

function FoodController($scope){
$scope.fooditems ="";
$scope.message="";
console.log($scope.fooditems);

$scope.lunchItems = function(){

  var foodlist =  $scope.fooditems.split(',');
  console.log(foodlist.length);


  if((foodlist.length -1)== 0){
      $scope.message="Please enter data first";
  }
  else if (foodlist.length<=3){
    $scope.message="Enjoy";
  }else if(foodlist.length>3){
    $scope.message="Too much!";
  }
}
}

})();
