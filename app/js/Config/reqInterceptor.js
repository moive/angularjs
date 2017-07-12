angular.module('miApp')
.factory('reqInterceptor', [function(){
	var interceptor = {
		request: function(config){
			config.headers['CSRF_TOKEN'] = 'a2d10a3211b415832791a6bc6';
			console.log(config);
			return config;
		},
		response: function(response){
			response.data.push({
				nombre: 'Lorem',
				apellidos: 'Ipsum Dolor',
				email: 'lorem@example.com',
				languajes: ['en', 'es']
			});
			return response;
		}
	};
	return interceptor;
}])
.config(['$httpProvider', function($httpProvider){
	$httpProvider.interceptors.push('reqInterceptor');
}]);