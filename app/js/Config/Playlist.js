angular.module('miApp')
.config(['PlaylistProvider', function(PlaylistProvider){
	var canciones = [
		'Cedarwood Road',
        'California (There Is No End to Love)',
        'Sleep Like a Baby Tonight',
        'Song for Someone',
        'This Is Where You Can Reach Me Now',
        'Iris (Hold Me Close)',
        'The Troubles',
        'Volcano'
	];

	PlaylistProvider.agregar(canciones);
}]);