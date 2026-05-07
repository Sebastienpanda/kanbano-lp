import { DOCUMENT } from "@angular/common";
import { afterNextRender, ChangeDetectionStrategy, Component, computed, effect, inject, signal } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { NavDesktop } from "@components/layout/desktop-nav/nav-desktop";
import { MobileNav } from "@components/layout/mobile-nav/mobile-nav";
import { Button } from "@components/utilities/button";
import { UserThemeService } from "@kanbano/services/user-theme.service";
import { LucideMoon, LucideSun } from "@lucide/angular";
import gsap from "gsap";

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
    private readonly router = inject(Router);

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
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (prefersReducedMotion) return;

            gsap.from(".header-container", {
                autoAlpha: 0,
                y: -20,
                duration: 1.2,
                ease: "circ.out",
            });
        });
    }

    toggleMenu(): void {
        this.isMenuOpen.update((v) => !v);
    }

    navigateToWaitlist(): void {
        this.isMenuOpen.set(false);
        this.router.navigate([], { fragment: "waitlist" });
    }
}
