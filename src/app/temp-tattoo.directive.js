angular.module("TemporaryTattoo")

    .directive("tempTattooHeader", function () {
        return {
            "templateUrl": "./src/views/template/header.tmpl.html",
            "controller": "SidenavController"
        }
    });
