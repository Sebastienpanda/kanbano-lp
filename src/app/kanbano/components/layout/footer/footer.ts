import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { afterNextRender, ChangeDetectionStrategy, Component, computed, inject, PLATFORM_ID, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavItem } from "@components/layout/header";
import { Button } from "@components/utilities/button";
import { UserThemeService } from "@kanbano/services/user-theme.service";
import { createTimeline } from "animejs";

@Component({
    selector: "kanbano-lp-footer",
    imports: [Button, RouterLink],
    templateUrl: "./footer.html",
    styleUrl: "./footer.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);
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

    constructor() {
        afterNextRender(() => {
            if (!isPlatformBrowser(this.platformId)) return;

            const prefersReducedMotion = this.document.defaultView?.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (prefersReducedMotion) return;

            const newsletter = this.document.querySelector<HTMLElement>(".footer-newsletter");
            if (!newsletter) return;

            newsletter.style.opacity = "0";

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (!entry.isIntersecting) return;
                    observer.disconnect();
                    createTimeline().add(".footer-newsletter", {
                        opacity: [0, 1],
                        scale: [0.85, 1],
                        duration: 600,
                        ease: "out(2)",
                    });
                },
                { threshold: 0.5 },
            );

            observer.observe(newsletter);
        });
    }
}
