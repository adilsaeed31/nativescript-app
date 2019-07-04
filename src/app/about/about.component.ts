import { Component, OnInit, Input } from "@angular/core"
@Component({
    selector: "About",
    moduleId: module.id,
    templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {
    @Input() showSearchBar: boolean = true
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onTextChanged(event: any): void {
        console.log(event, "event")
    }
}
