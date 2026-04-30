import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavItem } from "@components/layout/header";
import { Button } from "@components/utilities/button";
import { UserTheme } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-mobile-nav",
    imports: [RouterLink, Button],
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
    readonly theme = input<UserTheme>("light");
    readonly linkClicked = output<void>();
    readonly themeToggle = output<void>();
}
