import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SponsorRoutingModule } from "./sponsor-routing.module";
import { SponsorComponent } from "./sponsor.component";

@NgModule({
    imports: [NativeScriptCommonModule, SponsorRoutingModule],
    declarations: [SponsorComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SponsorModule {}
