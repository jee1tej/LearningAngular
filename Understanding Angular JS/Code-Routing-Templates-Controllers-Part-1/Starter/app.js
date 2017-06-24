var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider){
    
    
    $routeProvider
    .when("/", {
        templateUrl : "pages/main.html",
        controller : "mainController"
    })
    .when("/second", {
        templateUrl : "pages/second.html",
        controller : "secondController"
    })
    .when("/second/:num", {
        templateUrl : "pages/second.html",
        controller : "secondController"
    })
    .when("/third" , {
       templateUrl : "pages/third.html",
        controller : "thirdController"
    });
    
});


myApp.controller("mainController" , ["$scope" , function($scope){
    
    $scope.name = "Main";
    
}]);

myApp.controller("secondController" , ["$scope" , "$routeParams",function($scope , $routeParams){
    
    $scope.prathyu = "Prathyusha Mavoori";
    $scope.num = $routeParams.num || 1;
    
}]);

myApp.controller("thirdController" , ["$scope" , function($scope){
    
    $scope.jeevan = "Jeevan Tej Saladi";    
}]);