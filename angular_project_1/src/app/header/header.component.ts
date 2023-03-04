import { Component, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    @Output() onMenuButtonClick = new EventEmitter<string>();

    onSelect = (feature: string) => {
        this.onMenuButtonClick.emit(feature);
    }
}