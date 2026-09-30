import { Component, input } from "@angular/core";

@Component({
    selector: "kanbano-lp-vector-purple-top-2",
    imports: [],
    templateUrl: "./vector-purple-top-2.html",
    styleUrl: "./vector-purple-top-2.css",
    host: { "aria-hidden": "true", "[class.hide-desktop]": "hideOnDesktop()" },
})
export class VectorPurpleTop2 {
    hideOnDesktop = input<boolean>(false);
}
