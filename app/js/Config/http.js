angular.module('miApp')
.config(['$httpProvider', function($httpProvider){
	$httpProvider.defaults.headers.common.CSRF_TOKEN = "a2d10a3211b415832791a6bc6";
}]);