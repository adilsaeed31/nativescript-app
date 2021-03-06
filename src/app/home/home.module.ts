import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HeaderModule } from "../shared/ui/header.module";
import { KeynotesModule } from "../shared/home/keynotes/keynotes.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        HeaderModule,
        KeynotesModule
    ],
    declarations: [HomeComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
