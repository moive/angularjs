angular.module('miApp')
	.controller('FatherCtrl', ['$scope', function($scope){
		$scope.$on('eventChild', function(evt, arg){
			console.log(evt,arg)
			$scope.msgChild = arg.msg;
		});
		$scope.click = function(){
			$scope.$broadcast('eventFather', {msg:'The scope parent has been clicked.'});
		};
	}]);