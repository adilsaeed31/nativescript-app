import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { VenueRoutingModule } from "./venue-routing.module";
import { VenueComponent } from "./venue.component";

@NgModule({
    imports: [NativeScriptCommonModule, VenueRoutingModule],
    declarations: [VenueComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class VenueModule {}
