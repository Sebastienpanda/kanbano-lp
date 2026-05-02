import { ChangeDetectionStrategy, Component, computed, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavItem } from "@components/layout/header";
import { ThemeObserverService } from "@kanbano/services/theme-observer.service";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-nav-desktop",
    imports: [RouterLink],
    templateUrl: "./nav-desktop.html",
    styleUrl: "./nav-desktop.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDesktop {
    readonly nav = input.required<NavItem[]>();

    private readonly theme = inject(ThemeObserverService).currentTheme;
    private readonly userTheme = inject(UserThemeService);

    protected readonly showLightElements = computed(
        () => this.theme() === "light" || this.userTheme.theme() === "dark",
    );
}
