app.controller('HomeController', ['$rootScope', '$location', '$scope', '$cookieStore',
	function($rootScope, $location, $scope, $cookieStore){

	$rootScope.activetab = $location.path();
	
}]);