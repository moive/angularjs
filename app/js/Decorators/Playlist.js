angular.module('miApp')
.config(['$provider', function($provider){
	$provider.decorator('Playlist', ['$delegate', function($delegate){
		$delegate.texto = function(){
			return $delegate.listar().join(', ');
		};
	}]);
}]);