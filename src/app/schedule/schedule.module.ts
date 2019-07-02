import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ScheduleRoutingModule } from "./schedule-routing.module";
import { ScheduleComponent } from "./schedule.component";
import { HeaderModule } from "../shared/ui/header.module";

@NgModule({
    imports: [NativeScriptCommonModule, ScheduleRoutingModule, HeaderModule],
    declarations: [ScheduleComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ScheduleModule {}
