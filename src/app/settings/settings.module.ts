import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { HeaderModule } from "../shared/ui/header.module";

@NgModule({
    imports: [NativeScriptCommonModule, SettingsRoutingModule, HeaderModule],
    declarations: [SettingsComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SettingsModule {}
