angular.module('directory.controllers', [])

    .controller('EmployeeListCtrl', function ($scope, Employees) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.employees = Employees.query();
        }

        $scope.search = function () {
            $scope.employees = Employees.query({name: $scope.searchKey});
        }

        $scope.employees = Employees.query();
    })

    .controller('EmployeeDetailCtrl', function($scope, $stateParams, Employees) {
        console.log('details');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, Employees) {
        console.log('reports');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId, data: 'reports'});
    })

    .controller('BibleReadCtrl', function ($scope, $stateParams, $http, Employees) {
        console.log('Bible Read');
        $scope.content = "";

        // $http({method: 'GET', url: './resource/test2.txt', headers : {"Content-Type": "text/plain"}})

        $http.get('./resource/test.txt')
        .success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.content = data;
          console.error(arguments);
        })
        .error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.error(arguments);
        });
        
    });