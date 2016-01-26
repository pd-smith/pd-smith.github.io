(function(){
    var app = angular.module("personal-site", ['site-navigation','projects']);
    
    app.directive("navigation", [function(){
       return{
           restrict : 'E',
           templateUrl : '/src/pages/index.html',
           controller : function(){
               this.viewIndex = 1;
           },
           controllerAs : 'viewpage'
       }; 
    }]);
})();