(function(){
'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController', function($scope){
  $scope.name ="Neo";
  $scope.sayHello = function(){
    return "Hello Course Era!"
  }
})

})();
