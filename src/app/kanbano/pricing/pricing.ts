import { ChangeDetectionStrategy, Component } from "@angular/core";

import { SectionHeader } from "../components/layout/section-header";
import { Button } from "../components/utilities/button";
import { CheckItem } from "../components/utilities/check-item";

@Component({
    selector: "kanbano-lp-pricing",
    imports: [Button, CheckItem, SectionHeader],
    templateUrl: "./pricing.html",
    styleUrl: "./pricing.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pricing {}
