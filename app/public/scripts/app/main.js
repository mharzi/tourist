'use strict';

const angular = require('angular');

const toursit = angular.module('toursit', []);

toursit.controller('listVisitsController', function($scope) {
    $scope.visits = [];
});