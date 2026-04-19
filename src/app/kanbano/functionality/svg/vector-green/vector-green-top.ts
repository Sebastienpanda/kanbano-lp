import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, inject, input } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Component({
    selector: "kanbano-lp-vector-green-top",
    imports: [],
    templateUrl: "./vector-green-top.html",
    styleUrl: "./vector-green-top.css",
    host: { "aria-hidden": "true", "[class.hide-desktop]": "hideOnDesktop()" },
})
export class VectorGreenTop {
    hideOnDesktop = input<boolean>(false);
    protected readonly breakpoint = inject(BreakpointObserver);

    isDesktop = toSignal(this.breakpoint.observe("(min-width: 1024px)").pipe(map((r) => r.matches)), {
        initialValue: false,
    });
}
