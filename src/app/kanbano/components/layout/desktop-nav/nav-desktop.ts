import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavItem } from "@components/layout/header";

@Component({
    selector: "kanbano-lp-nav-desktop",
    imports: [RouterLink],
    templateUrl: "./nav-desktop.html",
    styleUrl: "./nav-desktop.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDesktop {
    readonly nav = input.required<NavItem[]>();
}
