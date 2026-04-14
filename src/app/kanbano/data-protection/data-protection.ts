import { ChangeDetectionStrategy, Component } from "@angular/core";

import { SectionHeader } from "../components/layout/section-header";

@Component({
    selector: "kanbano-lp-data-protection",
    imports: [SectionHeader],
    templateUrl: "./data-protection.html",
    styleUrl: "./data-protection.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataProtection {}
