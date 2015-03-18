/**
 * Created by Pedro on 17-03-2015.
 */

// start our angular module and inject userService
angular.module('articleCtrl', ['articleService'])

    // article controller for the main articles page
    // inject the Article factory (from the articleService)
    .controller('articleController', function(Article) {

        var vm = this;

        // set a processing variable to show loading things
        vm.processing = true;

        // grab all the users at page load
        Article.all()
            .success(function(data) {

                // when all the users come back, remove the processing variable
                vm.processing = false;

                // bind the users that come back to vm.articles
                vm.articles = data;
            });

    })

    // controller applied to the article creation page
    .controller('articleCreateController', function(Article) {

        var vm = this;

        // function to create an article
        vm.saveArticle = function() {
            vm.processing = true;

            // clear the message
            vm.message = '';

            // use the create function in the articleService
            // articleData object contains all info that is bound to the form using ng-model
            Article.create(vm.articleData)
                .success(function(data) {
                    vm.processing = false;

                    // clear the form
                    vm.articleData = {};
                    vm.message = data.message;
                });

        };

    });
