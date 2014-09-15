angular.module('quickbible.controllers', [])

    .controller('HomeCtrl', function ($scope, $location, $ionicModal) {

        console.log('HomeCtrl');

        $ionicModal.fromTemplateUrl('templates/bible-list.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });


        $scope.showList = function(){
//            $location.path('/list');
            $scope.popover.show();
        }
    })

    .controller('BibleReadCtrl', function ($scope, $stateParams, $http, $ionicListDelegate) {
        console.log('Bible Read');
        $scope.content = "";

        // $http({method: 'GET', url: './resource/test2.txt', headers : {"Content-Type": "text/plain"}})

        $http.get('./resource/bible/1/1.json')
        .success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.title = data.book;
          $scope.chapter = data.chapter;
          $scope.content = data.verses;
          $scope.sideMenuDeleteStatus = false;
          $scope.showDeleteButtons = function(){
                if($scope.sideMenuDeleteStatus){
                    $scope.sideMenuDeleteStatus = false;
                    $ionicListDelegate.showDelete(false);
                }else{
                    $scope.sideMenuDeleteStatus = true;
                    $ionicListDelegate.showDelete(true);
                }
          }
          
        })
        .error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.error(arguments);
        });
        
    })
    .controller('BibleListCtrl', function ($scope) {
        $scope.items = [
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
            {text : 1},
        ]
    });