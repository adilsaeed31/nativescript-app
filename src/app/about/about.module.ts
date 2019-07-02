import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { HeaderModule } from "../shared/ui/header.module";

@NgModule({
    imports: [NativeScriptCommonModule, AboutRoutingModule, HeaderModule],
    declarations: [AboutComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AboutModule {}
