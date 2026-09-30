import { Component, inject } from "@angular/core";
import { WaitlistNavigator } from "@kanbano/services/waitlist-navigator.service";

import { Button } from "./button";

@Component({
    selector: "kanbano-lp-cta-actions",
    imports: [Button],
    templateUrl: "./cta-actions.html",
    styleUrl: "./cta-actions.css",
})
export class CtaActions {
    protected readonly waitlist = inject(WaitlistNavigator);
}
