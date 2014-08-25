angular.module('quickbible.controllers', [])

    .controller('HomeCtrl', function ($scope) {

        console.log('HomeCtrl');
    })

    .controller('BibleReadCtrl', function ($scope, $stateParams, $http) {
        console.log('Bible Read');
        $scope.content = "";

        // $http({method: 'GET', url: './resource/test2.txt', headers : {"Content-Type": "text/plain"}})

        $http.get('./resource/result/창/1.json')
        .success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.title = data.book;
          $scope.chapter = data.chapter;
          $scope.content = data.verses;

          
        })
        .error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.error(arguments);
        });
        
    });