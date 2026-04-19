import { BreakpointObserver } from "@angular/cdk/layout";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Component({
    selector: "kanbano-lp-task-detail-svg",
    imports: [],
    templateUrl: "./task-detail-svg.html",
    styleUrl: "./task-detail-svg.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailSvg {
    protected readonly breakpoint = inject(BreakpointObserver);

    isTablet = toSignal(this.breakpoint.observe("(min-width: 768px)").pipe(map((r) => r.matches)), {
        initialValue: false,
    });
}
