(function(){
    var app = angular.module("projects", []);
    
    app.directive("projectGrid", ['$http', function($http){
       return{
           restrict : 'E',
           templateUrl : '/src/pages/project-grid.html',
           controller : function(){
               var grid = this;
               grid.projects = [];
               $http.get('/src/json/projects-info.json').success(function(response) {
                    grid.projects = response;
               });
           },
           controllerAs : 'proj'
       }; 
    }]);
})();