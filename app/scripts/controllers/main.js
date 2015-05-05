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
  		[10,3],
  		[10,4],
  		[10,5],
  		[10,6],
  		[10,7],
  		[10,8],
  		[10,9],
  		[10,10],
  		[10,-1],
  		[10,0],
  		[10,1],
  		[10,2],
  	];

    $scope.index = 0;
		$scope.voltages = [];
    $scope.voltageLabels = ['A','B'];

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
