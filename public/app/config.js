var app = angular.module('app', [
    'ngRoute'
]);

app.run(function($rootScope, $route){
    $rootScope.$route = $route;
});

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]);


