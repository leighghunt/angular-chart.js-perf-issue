'use strict';

/**
 * @ngdoc overview
 * @name angularChartjsPerfIssueApp
 * @description
 * # angularChartjsPerfIssueApp
 *
 * Main module of the application.
 */
angular
  .module('angularChartjsPerfIssueApp', [
    'ngAnimate',
    'chart.js',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
