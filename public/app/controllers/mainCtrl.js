/**
 * Created by Pedro on 09-03-2015.
 */

// mainCtrl is the controller that encompasses our main view
// it has 4 main tasks that will be accomplished by accessing the Auth Service:
//
// 1. Checking if a user is logged in using the Auth.isLoggedIn() function (that checks for a token on localStorage)
//    detecting route changes using $rootScope and check if the user is still logged in
// 2. Getting user data whenever the page route is changed to check current user to display message Hello *User*
// 3. Log a user in: this will authenticate the user with username and password. vm.loginData.username is bound
//    to an input that we'll create in our view
// 4. Log a user out: by calling Auth.logout(), which will delete the user's token in localStorage and any info
//    stored in the mainCtrl vm.user object, then we'll redirect the user to the homepage since they'll be unauth

angular.module('mainCtrl', [])

    .controller('mainController', function($rootScope, $location, Auth) {

        var vm = this;

        // get info if a person is logged in
        vm.loggedIn = Auth.isLoggedIn();

        // check to see if a user is logged in on every request
        // $rootScope module used here to detect route changes
        $rootScope.$on('$routeChangeStart', function() {
            vm.loggedIn = Auth.isLoggedIn();

            // get user information on page load via API endpoint /api/me
            Auth.getUser()
                .then(function(data) {
                    vm.user = data.data;
                });
        });

        // function to handle login form
        vm.doLogin = function() {

            // for the processing icon animation
            vm.processing = true;

            // clear the error
            vm.error = '';

            // call the Auth.login() function
            Auth.login(vm.loginData.username, vm.loginData.password)
                .success(function(data) {

                    // for the processing icon animation
                    vm.processing = false;

                    // if a user successfully logs in, redirect to users page
                    if (data.success){
                        $location.path('/users');
                    } else {
                        // adds a login error message
                        vm.error = data.message;
                    }

                });
        };

        // function to handle logging out
        vm.doLogout = function() {

            Auth.logout();

            // reset all user info
            vm.user = {};

            // redirect to login page
            $location.path('/login');
        };

    });