import { Component, input } from "@angular/core";

@Component({
    selector: "kanbano-lp-vector-green-top",
    imports: [],
    templateUrl: "./vector-green-top.html",
    styleUrl: "./vector-green-top.css",
    host: { "aria-hidden": "true", "[class.hide-desktop]": "hideOnDesktop()" },
})
export class VectorGreenTop {
    hideOnDesktop = input<boolean>(false);
}
