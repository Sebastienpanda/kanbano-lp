import { ChangeDetectionStrategy, Component, input } from "@angular/core";

type ButtonVariant = "primary" | "secondary";

@Component({
    selector: "kanbano-lp-button",
    imports: [],
    templateUrl: "./button.html",
    styleUrl: "./button.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
    readonly variant = input<ButtonVariant>("primary");
    readonly full = input<boolean>(false);
}
