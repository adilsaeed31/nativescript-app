import { Component, OnInit, Input } from "@angular/core"
import { RadSideDrawer } from "nativescript-ui-sidedrawer"
import * as app from "tns-core-modules/application"
import { Router } from "@angular/router"
import { RouterExtensions } from "nativescript-angular/router"
import { Page } from "tns-core-modules/ui/page/page"

// It's globally android variable by nativescript so telling to typescript for usage
declare var android: any
@Component({
    selector: "pc-header-bar",
    templateUrl: "./header.component.html",
    moduleId: module.id
})
export class HeaderComponent implements OnInit {
    @Input() title: string = "PHCC Conference"
    headerTitle: string = ""
    constructor(
        private router: Router,
        private routerExtension: RouterExtensions,
        private page: Page
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.headerTitle = this.title
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView()
        sideDrawer.showDrawer()
    }
    // this method we can use if want to something after actionbar load
    // In order to work this we need to add (loaded) on actionbar
    onLoadedActionBar() {}

    get canGoBack() {
        return this.routerExtension.canGoBack()
    }

    onGoBack() {
        this.routerExtension.backToPreviousPage()
    }

    onSearchActionTap(): void {
        console.log("Search Icon Tap")
    }

    isAboutPage() {
        // return this.router.parseUrl("about")
        return false
    }
}
