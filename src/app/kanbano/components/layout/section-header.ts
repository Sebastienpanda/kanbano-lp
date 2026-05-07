import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, input } from "@angular/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: "kanbano-lp-section-header",
    imports: [],
    templateUrl: "./section-header.html",
    styleUrl: "./section-header.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeader {
    readonly title = input.required<string>();
    readonly animate = input<string>();

    private readonly el = inject(ElementRef<HTMLElement>);

    constructor() {
        afterNextRender(() => {
            const host = this.el.nativeElement as HTMLElement;
            const icon = host.querySelector("[icon]");
            const title = host.querySelector(".section-header-title");

            if (!icon || !title) return;

            gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: host,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                })
                    .from(icon, { autoAlpha: 0, y: -20, duration: 0.5, ease: "power2.out" }, 0)
                    .from(title, { autoAlpha: 0, y: 20, duration: 0.5, ease: "power2.out" }, 0.15);
            });
        });
    }
}
