import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { afterNextRender, ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from "@angular/core";
import { VectorGreenRightParticipant } from "@kanbano/functionality/svg/vector-green-participants/vector-green-right-participant";
import { VectorPurpleLeftParticipant } from "@kanbano/functionality/svg/vector-purple-participants/vector-purple-left-participant";
import { createTimeline, onScroll } from "animejs";

import { HeadingItem } from "../heading-item";
import { InvitationCreate } from "./components/create/invitation-create";
import { Calculator } from "./components/icons/calculator";
import { Coffee } from "./components/icons/coffee";
import { OrganisationList } from "./components/list/organisation-list";
import { OrganisationView } from "./components/view/organisation-view";

@Component({
    selector: "kanbano-lp-functionality-participants",
    imports: [
        HeadingItem,
        VectorGreenRightParticipant,
        VectorPurpleLeftParticipant,
        OrganisationList,
        OrganisationView,
        InvitationCreate,
        Coffee,
        Calculator,
    ],
    templateUrl: "./functionality-participants.html",
    styleUrl: "./functionality-participants.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalityParticipants {
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);

    constructor() {
        afterNextRender(() => {
            if (!isPlatformBrowser(this.platformId)) return;

            const prefersReducedMotion = this.document.defaultView?.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (prefersReducedMotion) return;

            this.document
                .querySelectorAll<HTMLElement>(
                    '[data-animate="intervenant"], [data-animate="organisation-list"],' +
                        '[data-animate="organisation-list-arrow-one"], [data-animate="organisation-list-arrow-two"],' +
                        '[data-animate="organisation-list-arrow-three"],' +
                        '[data-animate="arrow-one-mobile"], [data-animate="arrow-two-mobile"],' +
                        '[data-animate="invitation-create"], [data-animate="organisation-view"]',
                )
                .forEach((el) => (el.style.opacity = "0"));

            const isDesktop = this.document.defaultView!.matchMedia("(min-width: 64em)").matches;

            if (isDesktop) {
                this.buildTimeline(
                    createTimeline({
                        autoplay: onScroll({ target: ".heading-participant", enter: "bottom bottom", repeat: false }),
                    }),
                );
            } else {
                const heading = this.document.querySelector(".heading-participant");
                if (!heading) return;
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (!entry.isIntersecting) return;
                        observer.disconnect();
                        this.buildTimeline(createTimeline());
                    },
                    { rootMargin: "0px 0px -20% 0px", threshold: 0 },
                );
                observer.observe(heading);
            }
        });
    }

    private buildTimeline(tl: ReturnType<typeof createTimeline>): void {
        tl.add(
            '[data-animate="intervenant"]',
            { opacity: [0, 1], translateY: [-30, 0], duration: 600, ease: "out(2)" },
            0,
        )
            .add(
                '[data-animate="organisation-list"]',
                { opacity: [0, 1], translateX: [-60, 0], duration: 600, ease: "out(2)" },
                450,
            )
            .add(
                '[data-animate="organisation-list-arrow-one"]',
                { opacity: [0, 1], translateX: [-30, 0], duration: 450, ease: "out(2)" },
                1050,
            )
            .add(
                '[data-animate="organisation-list-arrow-two"]',
                { opacity: [0, 1], translateX: [-30, 0], duration: 450, ease: "out(2)" },
                1050,
            )
            .add(
                '[data-animate="organisation-list-arrow-three"]',
                { opacity: [0, 1], translateX: [-30, 0], duration: 450, ease: "out(2)" },
                1050,
            )
            .add(
                '[data-animate="arrow-one-mobile"]',
                { opacity: [0, 1], translateY: [-30, 0], duration: 500, ease: "out(2)" },
                1050,
            )
            .add(
                '[data-animate="arrow-two-mobile"]',
                { opacity: [0, 1], translateY: [-30, 0], duration: 500, ease: "out(2)" },
                1300,
            )
            .add(
                '[data-animate="invitation-create"]',
                { opacity: [0, 1], translateY: [-30, 0], duration: 600, ease: "out(2)" },
                1500,
            )
            .add(
                '[data-animate="organisation-view"]',
                { opacity: [0, 1], translateY: [30, 0], duration: 600, ease: "out(2)" },
                1550,
            );
    }
}
