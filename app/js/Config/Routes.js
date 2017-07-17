angular.module('miApp')
.config(['$routeProvider', function($routeProvider){
	$routeProvider.caseInsensitiveMatch = true;
	$routeProvider
		.when('/', {templateUrl: 'index.html', controller: 'HomeCtrl'})
		.when('/usuario/:id?', {
			templateUrl: 'user.html',
			controller: 'UsuarioCtrl'
		})
		.when('/saludo/:mensaje?', {
			template: function(params){
				return '<p>'+(params.mensaje || 'Hola')+'</p>'
			}
		})
		.when('/contacto', {
			templateUrl: 'contacto.html',
			controller: 'ContactCtrl'
		})
		.when('/resolver', {
			template: '<p>Contenido: {{contenido}}</p>'+
						'<p>Promesa: {{promesa}}</p>',
			resolve: {
				contenido: function(){
					return 'Este es el contenido resuelto';
				},
				promesa: function($q){
					var def = $q.defer();
					setTimeout(function(){
						def.resolve('La promesa ha sido resuelta.');
					}, 2000);
					return def.promise;
				}
			},
			controller: function($scope, contenido, promesa){
				$scope.contenido = contenido;
				$scope.promesa = promesa;
			}
		})
		.when('/redirect/:param', {
			redirectTo: function(param, path, search){
				console.log(param, path, search);
				return '/resolver';
			}
		})
		.otherwise({redirectTo: '/'});
}]);