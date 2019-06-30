import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PosterRoutingModule } from "./poster-routing.module";
import { PosterComponent } from "./poster.component";

@NgModule({
    imports: [NativeScriptCommonModule, PosterRoutingModule],
    declarations: [PosterComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PosterModule {}
