angular.module("Sidenav")

    .service("SidenavService", function () {
        this.modules = [
            {
                name: "Home",
                url: "home"
            },
            {
                name: "About",
                url: "about"
            },
            {
                name: "Store",
                url: "store"
            },
            {
                name: "Contact",
                url: "contact"
            }];
    });
