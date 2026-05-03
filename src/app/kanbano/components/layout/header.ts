import { DOCUMENT } from "@angular/common";
import { afterNextRender, ChangeDetectionStrategy, Component, computed, effect, inject, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavDesktop } from "@components/layout/desktop-nav/nav-desktop";
import { MobileNav } from "@components/layout/mobile-nav/mobile-nav";
import { Button } from "@components/utilities/button";
import { UserThemeService } from "@kanbano/services/user-theme.service";
import { LucideMoon, LucideSun } from "@lucide/angular";
import { animate } from "animejs";

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

        afterNextRender(() => {
            animate(".header-container", {
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 500,
                ease: "cubicBezier(0.16, 1, 0.3, 1)",
            });
        });
    }

    toggleMenu(): void {
        this.isMenuOpen.update((v) => !v);
    }
}
