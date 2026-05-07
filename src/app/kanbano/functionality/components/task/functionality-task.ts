import { afterNextRender, ChangeDetectionStrategy, Component } from "@angular/core";
import { VectorBlueBold } from "@kanbano/functionality/svg/vector-blue-bold/vector-blue-bold";
import { VectorBlueBottom } from "@kanbano/functionality/svg/vector-blue/vector-blue-bottom";
import { VectorGreenTop } from "@kanbano/functionality/svg/vector-green/vector-green-top";
import { VectorPurpleTop2 } from "@kanbano/functionality/svg/vector-purple/vector-purple-top-2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HeadingItem } from "../heading-item";
import { TaskCreate } from "./components/create/task-create";
import { TaskEmpty } from "./components/empty/task-empty";
import { Book } from "./components/icon/book";
import { TaskView } from "./components/view/task-view";

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: "kanbano-lp-functionality-task",
    imports: [
        HeadingItem,
        VectorBlueBottom,
        VectorGreenTop,
        VectorPurpleTop2,
        VectorBlueBold,
        TaskEmpty,
        TaskView,
        TaskCreate,
        Book,
    ],
    templateUrl: "./functionality-task.html",
    styleUrl: "./functionality-task.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalityTask {
    constructor() {
        afterNextRender(() => {
            gsap.matchMedia().add("(prefers-reduced-motion: no-preference) and (min-width: 64em)", () => {
                this.buildTimeline(
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: ".heading-task",
                            start: "bottom bottom",
                            toggleActions: "play none none none",
                        },
                    }),
                );
            });
        });
    }

    private buildTimeline(tl: gsap.core.Timeline): void {
        tl.from('[data-animate="create-task"]', { autoAlpha: 0, x: 60, duration: 0.6, ease: "power2.out" }, 0)
            .from('[data-animate="task-empty"]', { autoAlpha: 0, x: 60, duration: 0.6, ease: "power2.out" }, 0.4)
            .from(
                '[data-animate="task-empty-arrow-two"]',
                { autoAlpha: 0, y: -30, duration: 0.45, ease: "power2.out" },
                0.8,
            )
            .from(
                '[data-animate="task-create-arrow-three"]',
                { autoAlpha: 0, y: -30, duration: 0.45, ease: "power2.out" },
                0.8,
            )
            .from('[data-animate="task-create"]', { autoAlpha: 0, y: 60, duration: 0.6, ease: "power2.out" }, 1.25)
            .from(
                '[data-animate="task-empty-arrow-one"]',
                { autoAlpha: 0, x: 60, duration: 0.45, ease: "power2.out" },
                1.85,
            )
            .from('[data-animate="task-view"]', { autoAlpha: 0, x: -60, duration: 0.6, ease: "power2.out" }, 2.21);
    }
}
