angular.module('miApp')
	.controller('ChildCtrl',['$scope', function($scope){
		$scope.$on('eventFather', function(event, arg){
			console.log(arg)
			$scope.msgParent = arg.msg;
		});
		$scope.click = function(){
			$scope.$emit('eventChild', {msg: 'The scope child has been clicked.'});
		};
	}]);