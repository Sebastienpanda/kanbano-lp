import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Router } from "@angular/router";

import { Button } from "./button";

@Component({
    selector: "kanbano-lp-cta-actions",
    imports: [Button],
    templateUrl: "./cta-actions.html",
    styleUrl: "./cta-actions.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaActions {
    private readonly router = inject(Router);

    navigateToWaitlist(): void {
        this.router.navigate([], { fragment: "waitlist" });
    }
}
