angular.module('miApp')
.config(['$httpProvider', function($httpProvider){
	$httpProvider.defaults.transformResponse.push(function(data){
		data.push({
			"nombre": "Junior",
			"apellidos": "Doe",
			"email": "junior@example.com",
			"languajes": ["es"]
		});
		return data;
	});
}]);