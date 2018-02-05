
app.directive('header', [function () {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: "views/directives/header.html",
		controller: ['$scope', '$filter', '$rootScope', '$location',
		function ($scope, $filter, $rootScope, $location) {
			
			$rootScope.activetab 	= $location.path();
	
		}]
	}
}])
