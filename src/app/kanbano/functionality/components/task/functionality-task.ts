import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { afterNextRender, ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from "@angular/core";
import { VectorBlueBold } from "@kanbano/functionality/svg/vector-blue-bold/vector-blue-bold";
import { VectorBlueBottom } from "@kanbano/functionality/svg/vector-blue/vector-blue-bottom";
import { VectorGreenTop } from "@kanbano/functionality/svg/vector-green/vector-green-top";
import { VectorPurpleTop2 } from "@kanbano/functionality/svg/vector-purple/vector-purple-top-2";
import { createTimeline, onScroll } from "animejs";

import { HeadingItem } from "../heading-item";
import { TaskCreate } from "./components/create/task-create";
import { TaskEmpty } from "./components/empty/task-empty";
import { Book } from "./components/icon/book";
import { TaskView } from "./components/view/task-view";

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
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);

    constructor() {
        afterNextRender(() => {
            if (!isPlatformBrowser(this.platformId)) return;

            const prefersReducedMotion = this.document.defaultView?.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (prefersReducedMotion) return;

            const isDesktop = this.document.defaultView!.matchMedia("(min-width: 64em)").matches;

            if (!isDesktop) return;

            this.document
                .querySelectorAll<HTMLElement>(
                    '[data-animate="create-task"], [data-animate="task-empty"],' +
                        '[data-animate="task-empty-arrow-one"], [data-animate="task-empty-arrow-two"],' +
                        '[data-animate="task-create"], [data-animate="task-create-arrow-three"],' +
                        '[data-animate="task-view"]',
                )
                .forEach((el) => (el.style.opacity = "0"));

            this.buildTimeline(
                createTimeline({
                    autoplay: onScroll({ target: ".heading-task", enter: "bottom bottom", repeat: false }),
                }),
            );
        });
    }

    private buildTimeline(tl: ReturnType<typeof createTimeline>): void {
        tl.add(
            '[data-animate="create-task"]',
            { opacity: [0, 1], translateX: [60, 0], duration: 600, ease: "out(2)" },
            0,
        )
            .add(
                '[data-animate="task-empty"]',
                { opacity: [0, 1], translateX: [60, 0], duration: 600, ease: "out(2)" },
                400,
            )
            .add(
                '[data-animate="task-empty-arrow-two"]',
                { opacity: [0, 1], translateY: [-30, 0], duration: 450, ease: "out(2)" },
                800,
            )
            .add(
                '[data-animate="task-create-arrow-three"]',
                { opacity: [0, 1], translateY: [-30, 0], duration: 450, ease: "out(2)" },
                800,
            )
            .add(
                '[data-animate="task-create"]',
                { opacity: [0, 1], translateY: [60, 0], duration: 600, ease: "out(2)" },
                1250,
            )
            .add(
                '[data-animate="task-empty-arrow-one"]',
                { opacity: [0, 1], translateX: [60, 0], duration: 450, ease: "out(2)" },
                1850,
            )
            .add(
                '[data-animate="task-view"]',
                { opacity: [0, 1], translateX: [-60, 0], duration: 600, ease: "out(2)" },
                2210,
            );
    }
}
