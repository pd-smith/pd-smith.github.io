(function(){
    var app = angular.module("site-navigation",[]);
    
    app.directive("navigationBar", function(){
       return {
         restrict : 'E',
         templateUrl : '/src/pages/navigation-bar.html'
       };
    });
    
    
})();