angular.module('quickbible.services', ['ngResource'])

    .factory('Employees', function ($resource) {
    	console.log('#############')
    	
        return $resource('/employees/:employeeId/:data');
    });