import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavItem } from "@components/layout/header";
import { Logo } from "@shared/icons/logo";

@Component({
    selector: "kanbano-lp-mobile-nav",
    imports: [RouterLink, Logo],
    templateUrl: "./mobile-nav.html",
    styleUrl: "./mobile-nav.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: "host",
    },
})
export class MobileNav {
    readonly nav = input.required<NavItem[]>();
    readonly isActive = input.required<boolean>();
    readonly linkClicked = output<void>();
}
