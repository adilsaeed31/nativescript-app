import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";

@Component({
    selector: "HomeThree",
    moduleId: module.id,
    templateUrl: "./homeThree.component.html"
})
export class HomeThreeComponent implements OnInit {
    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions
    ) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }
}