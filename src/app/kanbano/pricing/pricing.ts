import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { afterNextRender, ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from "@angular/core";
import { SectionHeader } from "@components/layout/section-header";
import { Button } from "@components/utilities/button";
import { CheckItem } from "@components/utilities/check-item";
import { createTimeline, onScroll } from "animejs";

@Component({
    selector: "kanbano-lp-pricing",
    imports: [Button, CheckItem, SectionHeader],
    templateUrl: "./pricing.html",
    styleUrl: "./pricing.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pricing {
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);

    constructor() {
        afterNextRender(() => {
            if (!isPlatformBrowser(this.platformId)) return;

            const prefersReducedMotion = this.document.defaultView?.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (prefersReducedMotion) return;

            this.document
                .querySelectorAll<HTMLElement>(
                    '[data-animate="pricing-free"], [data-animate="pricing-pro"], [data-animate="pricing-premium"]',
                )
                .forEach((el) => (el.style.opacity = "0"));

            createTimeline({
                autoplay: onScroll({
                    target: ".pricing",
                    enter: "top top",
                    repeat: false,
                }),
            })
                .add(
                    '[data-animate="pricing-free"]',
                    { opacity: [0, 1], translateY: [60, 0], duration: 600, ease: "out(2)" },
                    0,
                )
                .add(
                    '[data-animate="pricing-pro"]',
                    { opacity: [0, 1], translateY: [60, 0], duration: 600, ease: "out(2)" },
                    150,
                )
                .add(
                    '[data-animate="pricing-premium"]',
                    { opacity: [0, 1], translateY: [60, 0], duration: 600, ease: "out(2)" },
                    300,
                );
        });
    }
}
