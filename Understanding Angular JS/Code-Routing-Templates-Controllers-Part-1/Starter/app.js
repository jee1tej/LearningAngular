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

myApp.service("nameService" , function() {
    
    var self = this;
    self.name = "Surya Prabhakar";
    
    self.nameLength =  function() { 
        return self.name.length();
    }
    
})


myApp.controller("mainController" , ["$scope" , function($scope){
    
    $scope.name = "Main";
    
}]);

myApp.controller("secondController" , ["$scope" , "$routeParams", "nameService", function($scope , $routeParams, nameService){
    
    $scope.prathyu = "Prathyusha Mavoori";
    $scope.name = nameService.name;
    $scope.num = $routeParams.num || 1;
    
    $scope.$watch("name", function() { 
        
        nameService.name = $scope.name;
    
    });
    
}]);

myApp.controller("thirdController" , ["$scope" , "nameService", function($scope, nameService){
    
    $scope.jeevan = "Jeevan Tej Saladi";
    $scope.name = nameService.name;
    
    $scope.$watch("name", function() { 
        
        nameService.name = $scope.name;
    
    });
    
}]);

