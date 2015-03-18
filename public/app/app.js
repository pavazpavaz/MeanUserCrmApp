/**
 * Created by Pedro on 07-03-2015.
 */

angular.module("userApp", [
    "ngAnimate", // to add animations to all of our Angular directives (ngShow/ngHide)
    "app.routes", // app.routes will be routing for our application
    "authService", // authService is the service file for authentication (interacts with the API)
    "mainCtrl", // mainCtrl is the controller that encompasses our main view
    "userCtrl", // userCtrl is the controller for all our user management pages
    "articleCtrl", // articleCtrl is the controller for all the articles pages
    "userService", // userService is the Service that will return the data from our calls to the API
    "articleService" // articleService is the Service that will return the article data from our calls to the API
])

// application configuration to integrate token into requests
    .config(function($httpProvider) {

        // attach our auth interceptor to the http requests
        $httpProvider.interceptors.push('AuthInterceptor');

    });