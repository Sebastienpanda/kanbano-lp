import { BreakpointObserver } from "@angular/cdk/layout";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Component({
    selector: "kanbano-lp-workspace-empty-svg",
    imports: [],
    templateUrl: "./workspace-svg.html",
    styleUrl: "./workspace-svg.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceSvg {
    protected readonly breakpoint = inject(BreakpointObserver);

    isDesktop = toSignal(this.breakpoint.observe("(min-width: 768px)").pipe(map((r) => r.matches)), {
        initialValue: false,
    });
}
