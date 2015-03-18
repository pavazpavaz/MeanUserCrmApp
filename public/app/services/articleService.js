/**
 * Created by Pedro on 17-03-2015.
 */

// to post an article by the user with that id
// (accessed at POST http://localhost:8080/api/users/:user_id/articles)

// get the articles from the user with that id
// (accessed at GET http://localhost:8080/api/users/:user_id/articles)

// This Service will return the data from our calls to the API
// Note: if your API is hosted on a separate server, then you will need to prefix these /api/ URLs
// with your server URL like so: $http.get("http://example.com/api/users, ...)
angular.module('articleService', [])

    .factory('Article', function($http) {

        // create a new object
        var articleFactory = {};

        // get all users
        articleFactory.all = function(id) {
            return $http.get('/api/users/' + id + "/articles");
        };

        // create an article
        articleFactory.create = function(id, articleData) {
            return $http.post('/api/users/' + id + "/articles/", articleData);
        };

        // return our entire userFactory object
        return articleFactory;

    });