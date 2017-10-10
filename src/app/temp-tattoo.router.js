angular.module("TemporaryTattoo")

    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        var homeState = {
            "name": "home",
            "url": "/home",
            "templateUrl": "./src/views/home.html"
        };

        $urlRouterProvider.otherwise("/home");
        $stateProvider.state(homeState);
    });