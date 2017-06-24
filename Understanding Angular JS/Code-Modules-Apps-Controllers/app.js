///module takes a name and an array of dependencies as input. module - just the one variable sitting in the global namespace

///Specify ng-app in the view. 
var angularApp = angular.module('myApp', []);

///controller inside module..
//angularApp.controller("mainController", function( $log,$scope,$filter){
//    
//    $scope.name = "jeevan";
//    $scope.occupation = "engineer";
//    $scope.filteredName = $filter("uppercase")($scope.name);
//    $scope.getname = function(){
//        return $scope.name;
//    }
//    
//    $log.warn($scope.filteredName);
//    
////    console.log($scope);
////    console.log($log);
//});

///Angular dependency injection and minification
///second parameter for controller function can be an array.
///each array item is mapped to the parameters of the function in the last parameter of array.
///order in which array items will appear should be considered.
angularApp.controller("mainController",["$scope", "$log", "$filter", "$timeout", "$http", function( $scope,$log,$filter,$timeout,$http){
    
//    $scope.name = "jeevan";
//    $scope.occupation = "engineer";
//    $scope.filteredName = $filter("uppercase")($scope.name);
//    $scope.getname = function(){
//        return $scope.name;
//    }
//    
//    $timeout(function(){
//        $scope.name = "prathyu";
//    }, 3000);
//    
//    $log.warn($scope.filteredName);
    
//    console.log($scope);
//    console.log($log);
    
    
    
    ///Directives and two way data binding
    ///ng-model directive
    $scope.twitterHandle = "";
    $scope.lowerHandle = function(){
        return $filter("lowercase")($scope.twitterHandle);
    };
    
    ///angular directives ng-if, ng-show, ng-hide, ng-class, ng-repeat, ng-click, ng-cloak
    $scope.characters = 5;
    
    $scope.rules = [
        
        { rulename : "Must be 5 characters"},
        { rulename : "Must not  be used elsewhere"},
        { rulename : "Must be cool"}        
        
    ];
    
    $scope.alertClick = function(){
        alert("ng-clicked!!!");
    };
    
    
    ///XMLHttpRequest object and $http angular service
    $http.get("https://api.github.com/users/jee1tej")
         .then(function(success) {
                $scope.gitHubData = success.data;
            },
               function(error) {
                $log.error(error.data);
            }
         );
//    var request = new XMLHttpRequest();
//    request.onreadystatechange = function(){
//        
//        $scope.$apply(function(){
//            if(request.readyState === 4 && request.status === 200){
//                $scope.gitHubData = JSON.parse(request.responseText);
//            }
//        });
//    }
//    
//    request.open("GET","https://api.github.com/users/jee1tej",false);
//    request.send();
    
    
    
    ///watch list and digest cycle
//    $scope.$watch("twitterHandle", function(newValue, oldValue){
//        $log.info("newValue of twitterHandle:" + newValue + "\noldValue of twitterHandle:" + oldValue);
//    });
    ///How to tell angular to watch even outside of its execution thread.
    ///Inside it's execution thread, angular is wrapping up everything inside $scope.$apply for you.
    ///$timeout - angular service for timeout
//    setTimeout(function(){
//        $scope.$apply(function(){
//            $scope.twitterHandle = "newTwitterHandle";
//            $log.info("changed!!");
//        });
//    }, 3000);    
//    $timeout(function(){        
//            $scope.twitterHandle = "anotherNewTwitterHandle";
//            $log.info("changed!!");        
//    }, 6000);
    
    
    
}]);






//var searchPeople = function (firstName, $scope, height, age, occupation) {
//    return "Jeevan Tej";
//}
//
//console.log(searchPeople);
//
/////dependency injection - giving an object to a function
/////Angluar - dependency injection
//console.log(angular.injector().annotate(searchPeople));

///The Scope service