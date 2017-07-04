angular.module('miApp')
.controller('PromiseCtrl', ['$scope', '$q', function($scope, $q){
	var checkServer = function(){
		var def = $q.defer();
		setTimeout(function(){
			def.resolve('Online');
		}, 2000);
		return def.promise;
	};

	var checkHTTP = function(){
		var def = $q.defer();
		setTimeout(function(){
			if (Math.floor(Math.random()*100) > 50 ) {
				def.resolve("Online");
			}else {
				def.reject("El servicio no está disponible");
			}
		},5000);
		return def.promise;
	};

	var checkDb = function(){
		var def = $q.defer();
		setTimeout(function(){
			if(Math.floor(Math.random()*100) > 50 ){
				def.resolve('Online');
			}else{
				def.reject('El servicio no está disponible');
			}
		},3000);
		return def.promise;
	};

	var checkSsl = function(){
		var def = $q.defer();
		setTimeout(function(){
			def.notify('Comprobación de conexión segura iniciada.');

			if (Math.floor(Math.random()*100) > 50 ){
				def.notify('Las conexiones seguras están habilitadas');
				def.resolve('SSL');
			}else {
				def.notify('Las conexiones seguras están desactivadas');
				def.reject('Desactivadas');
			}

		},4000);

		return def.promise;
	};

	checkServer().then(function(result){
		$scope.status = result;
	});

	checkHTTP().then(function(result){
		$scope.http = result;
	}, function(err){
		$scope.http = err;
	});

	checkDb().then(function(result){
		$scope.db = result;
	},function(err){
		$scope.db = err;
	});

	checkSsl().then(function(result){
		$scope.ssl = result
	},function(err){
		$scope.ssl = err;
	},function(notify){
		console.log(notify);
	});
}])
.controller('AppCtrl',['$q', function($q){
	var promesa1 = $q.defer();
	var promesa2 = $q.defer();
	var promesa3 = $q.defer();

	promesa1.promise.then(completado);
	promesa2.promise.then(completado);
	promesa3.promise.then(completado);

	function completado(data){
		console.log(data);
	}

	setTimeout(function(){
		promesa1.resolve('Promesa #1 resuelta');
	}, Math.random() * 1000);

	setTimeout(function(){
		promesa2.resolve('Promesa #2 resuelta');
	}, Math.random() * 1000);

	setTimeout(function(){
		promesa3.resolve('Promesa #3 resuelta');
	}, Math.random() * 1000);

	var todas = $q.all([promesa1.promise, promesa2.promise, promesa3.promise]);
	todas.then(function(data){
		console.log(data);
	});
}]);