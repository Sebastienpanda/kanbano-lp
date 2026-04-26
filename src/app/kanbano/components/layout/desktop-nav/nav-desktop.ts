import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavItem } from "@components/layout/header";
import { ThemeObserverService } from "@kanbano/services/theme-observer.service";

@Component({
    selector: "kanbano-lp-nav-desktop",
    imports: [RouterLink],
    templateUrl: "./nav-desktop.html",
    styleUrl: "./nav-desktop.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDesktop {
    readonly nav = input.required<NavItem[]>();
    readonly theme = inject(ThemeObserverService).currentTheme;
}
