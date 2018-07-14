(function(){
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope){
  $scope.name = "Neo"
  $scope.stateofbeing="leo";
  $scope.saymessage = function(){
    return "I like to play"
  }
  $scope.feedNeo = function(){
    $scope.stateofbeing="gf";
  };
}



})();
