import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { WorkshopRoutingModule } from "./workshop-routing.module";
import { WorkshopComponent } from "./workshop.component";

@NgModule({
    imports: [NativeScriptCommonModule, WorkshopRoutingModule],
    declarations: [WorkshopComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class WorkshopModule {}
