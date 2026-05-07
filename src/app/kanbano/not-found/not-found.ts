import { afterNextRender, ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { UserThemeService } from "@kanbano/services/user-theme.service";
import gsap from "gsap";

@Component({
    selector: "kanbano-lp-not-found",
    imports: [RouterLink],
    templateUrl: "./not-found.html",
    styleUrl: "./not-found.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");

    constructor() {
        afterNextRender(() => {
            gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
                gsap.set(".not-found-ground", { autoAlpha: 0, scaleX: 0 });

                gsap.timeline({ delay: 0.3 })
                    // K tombe depuis le haut avec légère rotation
                    .from(".not-found-k", {
                        y: -600,
                        rotation: -8,
                        duration: 0.75,
                        ease: "power3.in",
                    })
                    // Impact : écrasement vertical
                    .to(".not-found-k", {
                        scaleY: 0.78,
                        scaleX: 1.12,
                        duration: 0.1,
                        ease: "power2.out",
                        transformOrigin: "center bottom",
                    })
                    // Sol apparaît à l'impact
                    .to(
                        ".not-found-ground",
                        {
                            autoAlpha: 1,
                            scaleX: 1,
                            duration: 0.15,
                            ease: "power2.out",
                            transformOrigin: "center center",
                        },
                        "<",
                    )
                    // Rebond vers le haut
                    .to(".not-found-k", {
                        scaleY: 1.06,
                        scaleX: 0.96,
                        y: -45,
                        duration: 0.22,
                        ease: "power2.out",
                        transformOrigin: "center bottom",
                    })
                    // Re-atterrissage léger
                    .to(".not-found-k", {
                        scaleY: 0.93,
                        scaleX: 1.05,
                        y: 0,
                        duration: 0.1,
                        ease: "power2.in",
                        transformOrigin: "center bottom",
                    })
                    // Stabilisation finale
                    .to(".not-found-k", {
                        scaleY: 1,
                        scaleX: 1,
                        rotation: 0,
                        duration: 0.25,
                        ease: "elastic.out(1, 0.5)",
                        transformOrigin: "center bottom",
                    });
            });

            gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
                gsap.set([".not-found-k", ".not-found-ground"], { autoAlpha: 1 });
            });
        });
    }
}
