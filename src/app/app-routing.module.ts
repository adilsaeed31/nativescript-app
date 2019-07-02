import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    {
        path: "hometwo",
        loadChildren: "~/app/homeTwo/homeTwo.module#HomeTwoModule"
    },
    {
        path: "homethree",
        loadChildren: "~/app/homeThree/homeThree.module#HomeThreeModule"
    },
    {
        path: "speakers",
        loadChildren: "~/app/speakers/speakers.module#SpeakersModule"
    },
    {
        path: "schedule",
        loadChildren: "~/app/schedule/schedule.module#ScheduleModule"
    },
    {
        path: "venue",
        loadChildren: "~/app/venue/venue.module#VenueModule"
    },
    {
        path: "workshop",
        loadChildren: "~/app/workshop/workshop.module#WorkshopModule"
    },
    {
        path: "poster",
        loadChildren: "~/app/poster/poster.module#PosterModule"
    },
    {
        path: "sponsor",
        loadChildren: "~/app/sponsor/sponsor.module#SponsorModule"
    },
    {
        path: "exhibitors",
        loadChildren: "~/app/exhibitors/exhibitors.module#ExhibitorsModule"
    },
    {
        path: "about",
        loadChildren: "~/app/about/about.module#AboutModule"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
