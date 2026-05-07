import { afterNextRender, ChangeDetectionStrategy, Component } from "@angular/core";
import { CtaActions } from "@components/utilities/cta-actions";
import { SectionThemeDirective } from "@kanbano/directives/section-theme.directive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Checked } from "./components/checked";

gsap.registerPlugin(ScrollTrigger);

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
            const targets = [
                ".hero-banner-heading",
                ".hero-banner-description",
                ".hero-banner-actions",
                "kanbano-lp-checked",
            ];
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(targets, { autoAlpha: 1 });
            });

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.timeline()
                    .from(".hero-banner-heading", { autoAlpha: 0, scale: 0.85, duration: 0.6, ease: "power2.out" }, 0)
                    .from(".hero-banner-description", { autoAlpha: 0, y: 24, duration: 0.5, ease: "power2.out" }, 0.45)
                    .from(".hero-banner-actions", { autoAlpha: 0, y: 24, duration: 0.5, ease: "power2.out" }, 0.53)
                    .from("kanbano-lp-checked", { autoAlpha: 0, y: 24, duration: 0.5, ease: "power2.out" }, 0.61);

                const trigger = {
                    trigger: ".hero-banner",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                };
                gsap.to(".hero-banner-k1", { y: -120, ease: "none", scrollTrigger: trigger });
                gsap.to(".hero-banner-k2", { y: -60, ease: "none", scrollTrigger: trigger });
                gsap.to(".hero-banner-k3", { y: -100, ease: "none", scrollTrigger: trigger });
            });
        });
    }
}
