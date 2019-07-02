import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HeaderComponent } from "./header.component";

@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HeaderModule {}
