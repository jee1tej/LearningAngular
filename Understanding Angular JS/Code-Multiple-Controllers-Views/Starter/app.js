var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = "Jeevan";
    
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name = "Prathyu";
    
}]);