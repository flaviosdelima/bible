var QuickBible = angular.module('quickbible', ['ionic', 'quickbible.controllers', 'quickbible.services']);

QuickBible.run(function ($ionicPlatform) {
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
});

QuickBible.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home-template.html',
        controller: 'HomeCtrl',
        reloadOnSearch: false
    })
    .state('read', {
        url: '/read:bookIndex',
        templateUrl: 'templates/bible-content.html',
        controller: 'BibleReadCtrl'
    })
    .state('list', {
        url: '/list',
        templateUrl: 'templates/bible-list.html',
        controller: 'BibleListCtrl'
    });

   

});