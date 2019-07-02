import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeTwoRoutingModule } from "./homeTwo-routing.module";
import { HomeTwoComponent } from "./homeTwo.component";
import { HeaderModule } from "../shared/ui/header.module";
import { KeynotesModule } from "../shared/home/keynotes/keynotes.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeTwoRoutingModule,
        HeaderModule,
        KeynotesModule
    ],
    declarations: [HomeTwoComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeTwoModule {}
