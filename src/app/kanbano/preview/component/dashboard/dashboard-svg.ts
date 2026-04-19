import { BreakpointObserver } from "@angular/cdk/layout";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Component({
    selector: "kanbano-lp-dashboard-svg",
    imports: [],
    templateUrl: "./dashboard-svg.html",
    styleUrl: "./dashboard-svg.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSvg {
    protected readonly breakpoint = inject(BreakpointObserver);

    isDesktop = toSignal(this.breakpoint.observe("(min-width: 1024px)").pipe(map((r) => r.matches)), {
        initialValue: false,
    });

    isTablet = toSignal(
        this.breakpoint.observe("(min-width: 768px) and (max-width: 1023px)").pipe(map((r) => r.matches)),
        { initialValue: false },
    );
}
