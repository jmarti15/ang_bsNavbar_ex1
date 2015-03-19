/*jslint node: true */
/*global angular */
"use strict";

var mod1 = angular.module('mod1', ['ui.router']);

// Definim el controlador pel mòdul mod1
mod1.controller('mainCtrl', function($scope, $http, $state) {
    $scope.gotoClients = function() {
        $state.go('clients');
    };
});

mod1.controller('clientsCtrl', function($scope, $http) {

    // Definim la funció dins del controlador
/// Ja ho carrega a l'inici
  $scope.descargaArchivo = function() {
        $http.get("api/clients").success( function(data) {
            $scope.clientList = data;
    });
  };

/// A clients.html cridem:  <div ng-init="descargaArchivo();">
/// També ho podríem cridar aquí:
///  $scope.descargaArchivo();

});

mod1.controller('homeCtrl', function($scope, $http) {
});

mod1.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state("home", {
                        url: "/",
                        templateUrl: 'home.html',
                        controller: 'homeCtrl'
                    });

    $stateProvider.state("clients", {
                        url: "/clients",
                        templateUrl: 'clients.html',
                        controller: 'clientsCtrl'
                    });

    $urlRouterProvider.otherwise('/');

/// **Això només funciona amb angularjs/1.2.26:
///    $locationProvider.html5Mode(true);
/// **Amb angularjs/1.3.13 cal fer:
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

});