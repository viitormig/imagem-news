var app = angular.module('app', [
    'ngRoute'
]);

// app.run(function($rootScope, $route){
//     // $rootScope.$route = $route;
//     // $rootScope.$server = "//localhost:3000/api/v1";
// });

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]);


