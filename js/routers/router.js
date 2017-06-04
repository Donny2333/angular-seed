/**
 * Created by Donny on 17/3/22.
 */
(function () {
    'use strict';

    angular.module('seed.routers', ['ui.router'])
        .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/app/home');

            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: './tpls/app.html',
                    controller: 'AppController'
                })
                .state('app.home', {
                    url: '/home',
                    templateUrl: './tpls/home.html',
                    controller: 'HomeController'
                })
                .state('app.message', {
                    url: '/message',
                    templateUrl: './tpls/message.html',
                    controller: 'MessageController'
                })
                .state('app.settings', {
                    url: '/settings',
                    templateUrl: './tpls/settings.html',
                    controller: 'SettingsController'
                });
        }]);

})();