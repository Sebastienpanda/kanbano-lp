import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Button } from "./button";

@Component({
    selector: "kanbano-lp-cta-actions",
    imports: [Button],
    templateUrl: "./cta-actions.html",
    styleUrl: "./cta-actions.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaActions {}
