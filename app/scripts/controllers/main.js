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
  		[3],
  		[4],
  		[5],
  		[6],
  		[7],
  		[8],
  		[9],
  		[10],
  		[-1],
  		[-2],
  		[-3],
  		[-2],
  		[-1],
  		[0],
  		[1],
  		[2],
  	];

    $scope.index = 0;
		$scope.voltages = [];
    $scope.voltageLabels = ['A'];

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
