import { Component, OnInit, Input } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "pc-header-bar",
    templateUrl: "./header.component.html",
    moduleId: module.id
})
export class HeaderComponent implements OnInit {
    @Input() title: string = "PHCC Conference";
    headerTitle: string = "";
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.headerTitle = this.title;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
