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
    self.name = "Dwayne Johnson";
    
    self.nameLength =  function() { 
        return self.name.length();
    }
    
})


myApp.controller("mainController" , ["$scope" , function($scope){
    
    $scope.name = "Main";
    
}]);

myApp.controller("secondController" , ["$scope" , "$routeParams", "nameService", function($scope , $routeParams, nameService){
    
    $scope.animal = "Dave Batistas";
    $scope.name = nameService.name;
    $scope.num = $routeParams.num || 1;
    
    $scope.$watch("name", function() { 
        
        nameService.name = $scope.name;
    
    });
    
}]);

myApp.controller("thirdController" , ["$scope" , "nameService", function($scope, nameService){
    
    $scope.person = "Sachin Tendulkar";
    $scope.name = nameService.name;
    
    $scope.$watch("name", function() { 
        
        nameService.name = $scope.name;
    
    });
    
}]);

myApp.directive("searchResult" , function() {
   
    return {
      restrict : "AECM",
      template : "<div class=\"list-group\"><a href=\"#\" class=\"list-group-item active\"><h4 class=\"list-group-item-heading\">Search Results</h4><p class=\"list-group-item-text\">555, Newyork, USA - 555</p></a></div>"  ,
      replace : true
    };
    
});