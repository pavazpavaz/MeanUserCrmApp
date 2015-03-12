/**
 * Created by Pedro on 08-03-2015.
 */

// This Service will return the data from our calls to the API
// Note: if your API is hosted on a separate server, then you will need to prefix these /api/ URLs
// with your server URL like so: $http.get("http://example.com/api/users, ...)
angular.module('userService', [])

    .factory('User', function($http) {

        // create a new object
        var userFactory = {};

        // get a single user
        userFactory.get = function(id) {
            return $http.get('/api/users/' + id);
        };

        // get all users
        userFactory.all = function() {
            return $http.get('/api/users/');
        };

        // create a user
        userFactory.create = function(userData) {
            return $http.post('/api/users/', userData);
        };

        // update a user
        userFactory.update = function(id, userData) {
            return $http.put('/api/users/' + id, userData);
        };

        // delete a user
        userFactory.delete = function(id) {
            return $http.delete('/api/users/' + id);
        };

        // return our entire userFactory object
        return userFactory;

    });