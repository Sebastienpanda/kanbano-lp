import { afterNextRender, ChangeDetectionStrategy, Component } from "@angular/core";
import { VectorGreenRightParticipant } from "@kanbano/functionality/svg/vector-green-participants/vector-green-right-participant";
import { VectorPurpleLeftParticipant } from "@kanbano/functionality/svg/vector-purple-participants/vector-purple-left-participant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HeadingItem } from "../heading-item";
import { InvitationCreate } from "./components/create/invitation-create";
import { Calculator } from "./components/icons/calculator";
import { Coffee } from "./components/icons/coffee";
import { OrganisationList } from "./components/list/organisation-list";
import { OrganisationView } from "./components/view/organisation-view";

gsap.registerPlugin(ScrollTrigger);

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
    constructor() {
        afterNextRender(() => {
            gsap.matchMedia().add("(prefers-reduced-motion: no-preference) and (min-width: 64em)", () => {
                this.buildTimeline(
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: ".heading-participant",
                            start: "bottom bottom",
                            toggleActions: "play none none none",
                        },
                    }),
                );
            });
        });
    }

    private buildTimeline(tl: gsap.core.Timeline): void {
        tl.from('[data-animate="intervenant"]', { autoAlpha: 0, y: -30, duration: 0.6, ease: "power2.out" }, 0)
            .from('[data-animate="organisation-list"]', { autoAlpha: 0, x: -60, duration: 0.6, ease: "power2.out" }, 0.45)
            .from('[data-animate="organisation-list-arrow-one"]', { autoAlpha: 0, x: -30, duration: 0.45, ease: "power2.out" }, 1.05)
            .from('[data-animate="organisation-list-arrow-two"]', { autoAlpha: 0, x: -30, duration: 0.45, ease: "power2.out" }, 1.05)
            .from('[data-animate="organisation-list-arrow-three"]', { autoAlpha: 0, x: -30, duration: 0.45, ease: "power2.out" }, 1.05)
            .from('[data-animate="arrow-one-mobile"]', { autoAlpha: 0, y: -30, duration: 0.5, ease: "power2.out" }, 1.05)
            .from('[data-animate="arrow-two-mobile"]', { autoAlpha: 0, y: -30, duration: 0.5, ease: "power2.out" }, 1.3)
            .from('[data-animate="invitation-create"]', { autoAlpha: 0, y: -30, duration: 0.6, ease: "power2.out" }, 1.5)
            .from('[data-animate="organisation-view"]', { autoAlpha: 0, y: 30, duration: 0.6, ease: "power2.out" }, 1.55);
    }
}
