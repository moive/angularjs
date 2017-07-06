'use-strict';

angular.module('miApp', [])
.config(['$qProvider','$logProvider', function ($qProvider,$logProvider) {
            $qProvider.errorOnUnhandledRejections(false);
            $logProvider.debugEnabled(false);
        }])
/*.run(['$anchorScroll', function($anchorScroll){
	$anchorScroll.yOffset = 50;
}]);*/