angular.module("Sidenav")

    .controller("SidenavController", function ($scope, $mdMedia, $mdSidenav, SidenavService) {
        $scope.isRendered = !$mdMedia("gt-sm");
        $scope.modules = SidenavService.modules;

        $scope.toggleSidenav = function (component_id) {
            $mdSidenav(component_id).toggle();
        };
    });
