import { afterNextRender, ChangeDetectionStrategy, Component } from "@angular/core";
import { CtaActions } from "@components/utilities/cta-actions";
import { SectionThemeDirective } from "@kanbano/directives/section-theme.directive";
import { createTimeline } from "animejs";

import { Checked } from "./components/checked";

@Component({
    selector: "kanbano-lp-hero-banner",
    imports: [CtaActions, Checked, SectionThemeDirective],
    templateUrl: "./hero-banner.html",
    styleUrl: "./hero-banner.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBanner {
    constructor() {
        afterNextRender(() => {
            const prefersReducedMotion = this.document.defaultView?.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (prefersReducedMotion) {
                [
                    ".hero-banner-heading",
                    ".hero-banner-description",
                    ".hero-banner-actions",
                    "kanbano-lp-checked",
                ].forEach((sel) => {
                    const el = this.document.querySelector<HTMLElement>(sel);
                    if (el) el.style.opacity = "1";
                });
                return;
            }

            createTimeline()
                .add(
                    ".hero-banner-heading",
                    {
                        opacity: [0, 1],
                        scale: [0.85, 1],
                        duration: 600,
                        ease: "out(2)",
                    },
                    0,
                )
                .add(
                    ".hero-banner-description",
                    {
                        opacity: [0, 1],
                        translateY: [24, 0],
                        duration: 500,
                        ease: "out(2)",
                    },
                    450,
                )
                .add(
                    ".hero-banner-actions",
                    {
                        opacity: [0, 1],
                        translateY: [24, 0],
                        duration: 500,
                        ease: "out(2)",
                    },
                    530,
                )
                .add(
                    "kanbano-lp-checked",
                    {
                        opacity: [0, 1],
                        translateY: [24, 0],
                        duration: 500,
                        ease: "out(2)",
                    },
                    610,
                );
        });
    }
}
