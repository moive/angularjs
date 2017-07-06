'use-strict';

angular.module('miApp', [])
.config(['$qProvider', function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }])
/*.run(['$anchorScroll', function($anchorScroll){
	$anchorScroll.yOffset = 50;
}]);*/