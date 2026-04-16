import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Component({
    selector: "kanbano-lp-vector-purple-top-2",
    imports: [],
    templateUrl: "./vector-purple-top-2.html",
    styleUrl: "./vector-purple-top-2.css",
})
export class VectorPurpleTop2 {
    protected readonly breakpoint = inject(BreakpointObserver);

    isDesktop = toSignal(this.breakpoint.observe("(min-width: 1024px)").pipe(map((r) => r.matches)), {
        initialValue: false,
    });
}
