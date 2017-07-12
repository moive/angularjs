angular.module('miApp')
.controller("classCtrl",['$scope', function($scope){
	var styles = {
		'font-weight': 'bold',
		'color': '#eee'
	};
	
	$scope.styles = styles;
	
	$scope.etiquetas = ['Actualidad', 'Finanzas', 'Tecnología'];
	
	$scope.message = 'Hi from the controller.';
	//$scope.buscar= "U2";
	var musica = [
		{artista: 'U2', cd: 'Songs of Innocence'},
		{artista: 'Afrojack', cd: 'Forget the World'},
		{artista: 'Alexandra Stan', cd: 'Unlocked'},
		{artista: 'Avicii', cd: 'True'},
		{artista: 'Dash Berlin', cd: 'The New Daylight'},
		{artista: 'David Guetta', cd: 'Lovers on the Sun'},
		{artista: 'Echosmith', cd: 'Talking Dreams'},
		{artista: 'La Roux', cd: ' Trouble in paradise'}
	];
	
	$scope.musica = musica;
	
	var playlist = {
		'The Miracle (Of Joey Ramone)': '4:15',
		'Raised By Wolves': '4:12',
		'Every Breaking Wave': '3:59',
		'Cedarwood Road': '3:46',
		'California (There Is No End to Love)': '5:19',
		'Sleep Like a Baby Tonight': '3:14',
		'Song for Someone': '4:05',
		'This Is Where You Can Reach Me Now': '4:25',
		'Iris (Hold Me Close)': '5:01',
		'The Troubles': '5:05',
		'Volcano': '4:45'
	};
	
	$scope.playlist = playlist;
	
}]);