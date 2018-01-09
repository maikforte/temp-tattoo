angular.module("TemporaryTattoo")

    .directive("tempTattooHeader", function () {
        return {
            "templateUrl": "./src/views/template/header.tmpl.html",
            "controller": "SidenavController"
        }
    })

    .directive("tempTattooFooter", function () {
        return {
            "templateUrl": "./src/views/template/footer.tmpl.html"
        }
    });
