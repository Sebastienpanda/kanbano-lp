import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import { Button } from "./button";

@Component({
    selector: "kanbano-lp-cta-actions",
    imports: [Button],
    templateUrl: "./cta-actions.html",
    styleUrl: "./cta-actions.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaActions {
    private readonly document = inject(DOCUMENT);

    navigateToWaitlist(): void {
        this.document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" });
    }
}
