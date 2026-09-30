import { DOCUMENT } from "@angular/common";
import { afterNextRender, Component, computed, effect, ElementRef, inject, signal, viewChild } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavDesktop } from "@components/layout/desktop-nav/nav-desktop";
import { MobileNav } from "@components/layout/mobile-nav/mobile-nav";
import { Button } from "@components/utilities/button";
import { UserThemeService } from "@kanbano/services/user-theme.service";
import { WaitlistNavigator } from "@kanbano/services/waitlist-navigator.service";
import { LucideMoon, LucideSun } from "@lucide/angular";
import { gsap } from "gsap";

export interface NavItem {
    fragment: string;
    name: string;
}

@Component({
    selector: "kanbano-lp-header",
    imports: [RouterLink, MobileNav, NavDesktop, Button, LucideSun, LucideMoon],
    templateUrl: "./header.html",
    styleUrl: "./header.css",
    host: {
        "(document:keydown.escape)": "closeMenu()",
    },
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
            fragment: "protection",
            name: "Protection des données",
        },
    ]);

    protected readonly isMenuOpen = signal<boolean>(false);

    private readonly menuButton = viewChild.required<ElementRef<HTMLButtonElement>>("menuButton");
    private readonly document = inject(DOCUMENT);
    private readonly waitlist = inject(WaitlistNavigator);

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

    closeMenu(): void {
        if (!this.isMenuOpen()) return;

        this.isMenuOpen.set(false);
        this.menuButton().nativeElement.focus();
    }

    navigateToWaitlist(): void {
        this.isMenuOpen.set(false);
        this.waitlist.goToWaitlist();
    }
}
