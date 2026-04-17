import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Component({
    selector: "kanbano-lp-vector-green-right-participant",
    imports: [],
    templateUrl: "./vector-green-right-participant.html",
    styleUrl: "./vector-green-right-participant.css",
})
export class VectorGreenRightParticipant {
    protected readonly breakpoint = inject(BreakpointObserver);

    isDesktop = toSignal(this.breakpoint.observe("(min-width: 1024px)").pipe(map((r) => r.matches)), {
        initialValue: false,
    });
}
