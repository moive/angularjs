'use-strict';

angular.module('miApp', [])
.run(['$anchorScroll', function($anchorScroll){
	$anchorScroll.yOffset = 50;
}]);