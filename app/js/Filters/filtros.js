angular.module('miApp')
.filter('titulo', ['$log', function($log){
	return function(input){
		return input.split(' ')
			.map(function(elem){
				return elem[0].toUpperCase() + elem.slice(1);
			})
			.join(' ');
	};
}]);