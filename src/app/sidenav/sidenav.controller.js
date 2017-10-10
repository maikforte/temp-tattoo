angular.module("Sidenav")

    .controller("SidenavController", function ($scope, $mdMedia) {
        $scope.isRendered = !$mdMedia("gt-sm");
    });
