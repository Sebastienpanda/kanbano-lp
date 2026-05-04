import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { afterNextRender, ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from "@angular/core";
import { VectorBlueBottom } from "@kanbano/functionality/svg/vector-blue/vector-blue-bottom";
import { VectorGreenTop } from "@kanbano/functionality/svg/vector-green/vector-green-top";
import { VectorPurpleTop2 } from "@kanbano/functionality/svg/vector-purple/vector-purple-top-2";
import { createTimeline, onScroll } from "animejs";

import { HeadingItem } from "../heading-item";
import { WorkspaceCreate } from "./components/create/workspace-create";
import { WorkspaceEmpty } from "./components/empty/workspace-empty";
import { Laptop } from "./components/icons/laptop/laptop";
import { Loupe } from "./components/icons/loupe/loupe";
import { Paper } from "./components/icons/paper/paper";
import { WorkspaceView } from "./components/view/workspace-view";

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
                    '[data-animate="1"], [data-animate="2"], [data-animate="3"],' +
                        '[data-animate="empty-arrow-1"], [data-animate="empty-arrow-2"],' +
                        '[data-animate="create-rose-2"]',
                )
                .forEach((el) => (el.style.opacity = "0"));

            this.buildTimeline(
                createTimeline({
                    autoplay: onScroll({ target: ".heading-workspace", enter: "bottom bottom", repeat: false }),
                }),
            );
        });
    }

    private buildTimeline(tl: ReturnType<typeof createTimeline>): void {
        tl.add('[data-animate="1"]', { opacity: [0, 1], translateX: [-60, 0], duration: 600, ease: "out(2)" }, 0)
            .add(
                '[data-animate="empty-arrow-1"]',
                { opacity: [0, 1], translateY: [-30, 0], duration: 450, ease: "out(2)" },
                450,
            )
            .add(
                '[data-animate="empty-arrow-2"]',
                { opacity: [0, 1], translateY: [-30, 0], duration: 500, ease: "out(2)" },
                500,
            )
            .add('[data-animate="2"]', { opacity: [0, 1], translateY: [60, 0], duration: 600, ease: "out(2)" }, 800)
            .add(
                '[data-animate="create-rose-2"]',
                { opacity: [0, 1], translateX: [-30, 0], duration: 450, ease: "out(2)" },
                1200,
            )
            .add('[data-animate="3"]', { opacity: [0, 1], translateX: [60, 0], duration: 600, ease: "out(2)" }, 1600);
    }
}
