/**
 * Created by Pedro on 07-03-2015.
 */


// Routing for our app

angular.module('app.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            // home page route
            .when('/', {
                templateUrl : 'app/views/pages/home.html'
            })

            // login page
            .when('/login', {
                templateUrl : 'app/views/pages/login.html',
                controller  : 'mainController',
                controllerAs: 'login'
            })

            // show all users
            .when('/users', {
                templateUrl: 'app/views/pages/users/all.html',
                controller: 'userController',
                controllerAs: 'user'
            })

            // form to create a new user
            // same view as edit page
            .when('/users/create', {
                templateUrl: 'app/views/pages/users/single.html',
                controller: 'userCreateController',
                controllerAs: 'user'
            })

            // page to edit a user
            .when('/users/:user_id', {
                templateUrl: 'app/views/pages/users/single.html',
                controller: 'userEditController',
                controllerAs: 'user'
            })

            // show all articles by that user
            .when('/users/:user_id/articles', {
                templateUrl: 'app/views/pages/articles/all.html',
                controller: 'articleController',
                controllerAs: 'article'
            })

            // form to create an article
            .when('/users/:user_id/create', {
                templateUrl: 'app/views/pages/articles/single.html',
                controller: 'articleCreateController',
                controllerAs: 'article'
            });

        // get rid of the hash(#) in the URL
        $locationProvider.html5Mode(true);

    });