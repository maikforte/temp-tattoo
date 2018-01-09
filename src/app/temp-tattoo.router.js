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

        var aboutState = {
            "name": "about",
            "url": "/about",
            "templateUrl": "./src/views/about.html"
        };

        var storeState = {
            "name": "store",
            "url": "/store",
            "templateUrl": "./src/views/store.html",
            "controller": "StoreController"
        };

        $urlRouterProvider.otherwise("/home");
        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
        $stateProvider.state(storeState);
    });
