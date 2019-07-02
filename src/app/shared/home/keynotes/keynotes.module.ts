import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { KeynotesComponent } from "./keynotes.components";

@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [KeynotesComponent],
    exports: [KeynotesComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class KeynotesModule {}
