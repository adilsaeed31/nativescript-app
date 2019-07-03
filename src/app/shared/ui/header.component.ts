import { Component, OnInit, Input } from "@angular/core"
import { RadSideDrawer } from "nativescript-ui-sidedrawer"
import * as app from "tns-core-modules/application"
import { Router } from "@angular/router"
import { RouterExtensions } from "nativescript-angular/router"
import { Page, isAndroid } from "tns-core-modules/ui/page/page"

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

    onLoadedActionBar() {
        if (isAndroid) {
            const androidToolbar = this.page.actionBar.nativeView
            const backButton = androidToolbar.getNavigationIcon()
            if (backButton) {
                backButton.setColorFilter(
                    android.graphics.Color.parseColor("#4A4A4A"),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                )
            }
        }
    }

    onSearchActionTap(): void {
        console.log("Search Icon Tap")
    }
}
