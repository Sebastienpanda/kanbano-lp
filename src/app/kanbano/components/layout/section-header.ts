import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: "kanbano-lp-section-header",
    imports: [],
    templateUrl: "./section-header.html",
    styleUrl: "./section-header.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeader {
    readonly title = input.required<string>();
    readonly animate = input<string>();
}
