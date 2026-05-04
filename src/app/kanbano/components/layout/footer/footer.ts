import { ChangeDetectionStrategy, Component, computed, inject, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavItem } from "@components/layout/header";
import { Button } from "@components/utilities/button";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-footer",
    imports: [Button, RouterLink],
    templateUrl: "./footer.html",
    styleUrl: "./footer.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");

    protected readonly nav = signal<NavItem[]>([
        {
            fragment: "fonctionnalités",
            name: "Fonctionnalités",
        },
        {
            fragment: "prix",
            name: "Prix",
        },
        {
            fragment: "témoignages",
            name: "Témoignages",
        },
        {
            fragment: "protection",
            name: "Protection des données",
        },
    ]);
}
