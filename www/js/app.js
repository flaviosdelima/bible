angular.module('quickbible', ['ionic', 'quickbible.controllers', 'quickbible.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home-template.html',
            controller: 'HomeCtrl'
        })
        .state('read', {
            url: '/read',
            templateUrl: 'templates/bible-content.html',
            controller: 'BibleReadCtrl'
        });

       

    });