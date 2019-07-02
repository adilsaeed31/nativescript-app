import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeThreeRoutingModule } from "./homeThree-routing.module";
import { HomeThreeComponent } from "./homeThree.component";
import { HeaderModule } from "../shared/ui/header.module";

@NgModule({
    imports: [NativeScriptCommonModule, HomeThreeRoutingModule, HeaderModule],
    declarations: [HomeThreeComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeThreeModule {}
