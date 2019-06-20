angular.module('myApp')
	.run(['$rootScope', function($rootScope){
		$rootScope.$on('$routeChangeSuccess', function( event, current, previous ){
			$rootScope.title = current.$$route.title;
		});
	}]);