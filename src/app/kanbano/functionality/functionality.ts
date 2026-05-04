import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { afterNextRender, ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from "@angular/core";
import { SectionHeader } from "@components/layout/section-header";
import { CtaActions } from "@components/utilities/cta-actions";
import { createTimeline, onScroll } from "animejs";

import { FunctionalityParticipants } from "./components/participants/functionality-participants";
import { FunctionalityTask } from "./components/task/functionality-task";
import { FunctionalityWorkspace } from "./components/workspace/functionality-workspace";

@Component({
    selector: "kanbano-lp-functionality",
    imports: [CtaActions, FunctionalityWorkspace, FunctionalityTask, FunctionalityParticipants, SectionHeader],
    templateUrl: "./functionality.html",
    styleUrl: "./functionality.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Functionality {
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);

    constructor() {
        afterNextRender(() => {
            if (!isPlatformBrowser(this.platformId)) return;

            const prefersReducedMotion = this.document.defaultView?.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) return;

            const heading = this.document.querySelector<HTMLElement>('[data-animate="fonctionnalite-heading"]');
            if (!heading) return;

            heading.style.opacity = "0";

            createTimeline({
                autoplay: onScroll({ target: heading, enter: "bottom bottom", repeat: false }),
            }).add(heading, { opacity: [0, 1], scale: [0.85, 1], duration: 600, ease: "out(2)" });
        });
    }
}
