import { afterNextRender, ChangeDetectionStrategy, Component } from "@angular/core";
import { SectionHeader } from "@components/layout/section-header";
import { CheckItem } from "@components/utilities/check-item";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: "kanbano-lp-pricing",
    imports: [CheckItem, SectionHeader],
    templateUrl: "./pricing.html",
    styleUrl: "./pricing.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pricing {
    constructor() {
        afterNextRender(() => {
            gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: ".pricing-cards",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                })
                    .from(
                        '[data-animate="pricing-free"]',
                        { autoAlpha: 0, y: 60, duration: 0.6, ease: "power2.out" },
                        0,
                    )
                    .from(
                        '[data-animate="pricing-pro"]',
                        { autoAlpha: 0, y: 60, duration: 0.6, ease: "power2.out" },
                        0.15,
                    )
                    .from(
                        '[data-animate="pricing-premium"]',
                        { autoAlpha: 0, y: 60, duration: 0.6, ease: "power2.out" },
                        0.3,
                    );
            });
        });
    }
}
