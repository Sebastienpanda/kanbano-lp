import { afterNextRender, ChangeDetectionStrategy, Component } from "@angular/core";
import { VectorBlueBottom } from "@kanbano/functionality/svg/vector-blue/vector-blue-bottom";
import { VectorGreenTop } from "@kanbano/functionality/svg/vector-green/vector-green-top";
import { VectorPurpleTop2 } from "@kanbano/functionality/svg/vector-purple/vector-purple-top-2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HeadingItem } from "../heading-item";
import { WorkspaceCreate } from "./components/create/workspace-create";
import { WorkspaceEmpty } from "./components/empty/workspace-empty";
import { Laptop } from "./components/icons/laptop/laptop";
import { Loupe } from "./components/icons/loupe/loupe";
import { Paper } from "./components/icons/paper/paper";
import { WorkspaceView } from "./components/view/workspace-view";

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: "kanbano-lp-functionality-workspace",
    imports: [
        HeadingItem,
        VectorBlueBottom,
        VectorGreenTop,
        VectorPurpleTop2,
        WorkspaceEmpty,
        WorkspaceCreate,
        WorkspaceView,
        Loupe,
        Laptop,
        Paper,
    ],
    templateUrl: "./functionality-workspace.html",
    styleUrl: "./functionality-workspace.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalityWorkspace {
    constructor() {
        afterNextRender(() => {
            gsap.matchMedia().add("(prefers-reduced-motion: no-preference) and (min-width: 64em)", () => {
                this.buildTimeline(
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: ".heading-workspace",
                            start: "bottom bottom",
                            toggleActions: "play none none none",
                        },
                    }),
                );
            });
        });
    }

    private buildTimeline(tl: gsap.core.Timeline): void {
        tl.from('[data-animate="1"]', { autoAlpha: 0, x: -60, duration: 0.6, ease: "power2.out" }, 0)
            .from('[data-animate="empty-arrow-1"]', { autoAlpha: 0, y: -30, duration: 0.45, ease: "power2.out" }, 0.45)
            .from('[data-animate="empty-arrow-2"]', { autoAlpha: 0, y: -30, duration: 0.5, ease: "power2.out" }, 0.5)
            .from('[data-animate="2"]', { autoAlpha: 0, y: 60, duration: 0.6, ease: "power2.out" }, 0.8)
            .from('[data-animate="create-rose-2"]', { autoAlpha: 0, x: -30, duration: 0.45, ease: "power2.out" }, 1.2)
            .from('[data-animate="3"]', { autoAlpha: 0, x: 60, duration: 0.6, ease: "power2.out" }, 1.6);
    }
}
