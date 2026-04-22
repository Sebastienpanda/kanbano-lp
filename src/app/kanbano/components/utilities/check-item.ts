import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CheckedIcon } from "@kanbano/hero-banner/icon/checked-icon";

@Component({
    selector: "kanbano-lp-check-item",
    imports: [CheckedIcon],
    templateUrl: "./check-item.html",
    styleUrl: "./check-item.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckItem {}
