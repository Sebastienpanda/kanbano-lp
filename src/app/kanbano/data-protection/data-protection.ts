import { afterNextRender, ChangeDetectionStrategy, Component } from "@angular/core";
import { SectionHeader } from "@components/layout/section-header";
import { LucideArrowRight } from "@lucide/angular";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: "kanbano-lp-data-protection",
    imports: [SectionHeader, LucideArrowRight],
    templateUrl: "./data-protection.html",
    styleUrl: "./data-protection.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataProtection {
    constructor() {
        afterNextRender(() => {
            gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
                gsap.from(".data-protection-bloc", {
                    autoAlpha: 0,
                    scale: 0.85,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".data-protection-bloc",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });
        });
    }
}
