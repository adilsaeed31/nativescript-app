import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ExhibitorsComponent } from "./exhibitors.component";

const routes: Routes = [{ path: "", component: ExhibitorsComponent }];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ExhibitorsRoutingModule {}
