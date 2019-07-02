import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ExhibitorsRoutingModule } from "./exhibitors-routing.module";
import { ExhibitorsComponent } from "./exhibitors.component";
import { HeaderModule } from "../shared/ui/header.module";

@NgModule({
    imports: [NativeScriptCommonModule, ExhibitorsRoutingModule, HeaderModule],
    declarations: [ExhibitorsComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ExhibitorsModule {}
