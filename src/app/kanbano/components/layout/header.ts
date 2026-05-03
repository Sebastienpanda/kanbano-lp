import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavDesktop } from "@components/layout/desktop-nav/nav-desktop";
import { MobileNav } from "@components/layout/mobile-nav/mobile-nav";
import { Button } from "@components/utilities/button";
import { UserThemeService } from "@kanbano/services/user-theme.service";
import { LucideMoon, LucideSun } from "@lucide/angular";

export interface NavItem {
    fragment: string;
    name: string;
}

@Component({
    selector: "kanbano-lp-header",
    imports: [RouterLink, MobileNav, NavDesktop, Button, LucideSun, LucideMoon],
    templateUrl: "./header.html",
    styleUrl: "./header.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
    protected readonly userTheme = inject(UserThemeService);
    protected readonly isDark = computed(() => this.userTheme.theme() === "dark");

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

    protected readonly isMenuOpen = signal<boolean>(false);

    private readonly document = inject(DOCUMENT);

    constructor() {
        effect(() => {
            this.document.documentElement.style.overflow = this.isMenuOpen() ? "hidden" : "";
        });
    }

    toggleMenu(): void {
        this.isMenuOpen.update((v) => !v);
    }
}
