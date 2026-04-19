import { BreakpointObserver } from "@angular/cdk/layout";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Component({
    selector: "kanbano-lp-task-view-svg",
    imports: [],
    templateUrl: "./task-view-svg.html",
    styleUrl: "./task-view-svg.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskViewSvg {
    protected readonly breakpoint = inject(BreakpointObserver);

    isTablet = toSignal(this.breakpoint.observe("(min-width: 768px)").pipe(map((r) => r.matches)), {
        initialValue: false,
    });
}
