(function(){
  'use strict';

angular.module('DIApp',[])

.controller('DIController', ['$scope','$filter',DIController]);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter){
  $scope.name = "Neo";

  $scope.upper= function(){
    var upcase = $filter('uppercase');
    $scope.name = upcase($scope.name);
  }

}
})();
