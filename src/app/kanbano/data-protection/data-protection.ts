import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { afterNextRender, ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from "@angular/core";
import { SectionHeader } from "@components/layout/section-header";
import { LucideArrowRight } from "@lucide/angular";
import { createTimeline, onScroll } from "animejs";

@Component({
    selector: "kanbano-lp-data-protection",
    imports: [SectionHeader, LucideArrowRight],
    templateUrl: "./data-protection.html",
    styleUrl: "./data-protection.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataProtection {
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);

    constructor() {
        afterNextRender(() => {
            if (!isPlatformBrowser(this.platformId)) return;

            const prefersReducedMotion = this.document.defaultView?.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (prefersReducedMotion) return;

            const bloc = this.document.querySelector<HTMLElement>(".data-protection-bloc");
            if (bloc) bloc.style.opacity = "0";

            createTimeline({
                autoplay: onScroll({
                    target: ".data-protection",
                    enter: "top top",
                    repeat: false,
                }),
            }).add(".data-protection-bloc", {
                opacity: [0, 1],
                scale: [0.85, 1],
                duration: 600,
                ease: "out(2)",
            });
        });
    }
}
