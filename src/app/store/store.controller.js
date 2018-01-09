angular.module("Store")

    .controller("StoreController", function ($scope, StoreService) {
        $scope.keyword = "";
        $scope.items = StoreService.items;
    });
