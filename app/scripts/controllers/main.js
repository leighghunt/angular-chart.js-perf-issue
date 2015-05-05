'use strict';

/**
 * @ngdoc function
 * @name angularChartjsPerfIssueApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularChartjsPerfIssueApp
 */
angular.module('angularChartjsPerfIssueApp')
  .controller('MainCtrl', function ($interval, $scope) {

  	$scope.data = [
  		[1,2,3,4,5,6,7,8,9,10],
  		[1,2,4,4,5,6,7,8,9,10],
  		[1,2,5,4,5,6,7,8,9,10],
  		[1,2,6,4,5,6,7,8,9,10],
  		[1,2,7,4,5,6,7,8,9,10],
  		[1,2,8,4,5,6,7,8,9,10],
  		[1,2,9,4,5,6,7,8,9,10],
  		[1,2,10,4,5,6,7,8,9,10],
  		[1,2,-1,4,5,6,7,8,9,10],
  		[1,2,0,4,5,6,7,8,9,10],
  		[1,2,1,4,5,6,7,8,9,10],
  		[1,2,2,4,5,6,7,8,9,10],
  	];

    $scope.index = 0;
		$scope.voltages = [];
    $scope.voltageLabels = ['A','B','C','D','E','F','G','H','I','J'];

  	$scope.voltages[0] = $scope.data[$scope.index++];


		$interval(function () {
	  	console.log('Tick');

	  	if($scope.index>=$scope.data.length){
	  		$scope.index = 0;
	  	}

	  	$scope.voltages[0] = $scope.data[$scope.index++];
	  	//console.log($scope.voltages);

		}, 1000);

  });
