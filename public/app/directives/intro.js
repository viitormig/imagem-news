
app.directive('intro', [function () {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: "views/directives/intro.html",
		controller: ['$scope', '$filter', '$rootScope', '$location',
		function ($scope, $filter, $rootScope, $location) {
			
			$rootScope.activetab 	= $location.path();
	
		}]
	}
}])
