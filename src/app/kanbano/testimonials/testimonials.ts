import { DOCUMENT, isPlatformBrowser, NgOptimizedImage } from "@angular/common";
import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    inject,
    PLATFORM_ID,
    signal,
} from "@angular/core";
import { SectionHeader } from "@components/layout/section-header";
import { BottomSvg } from "@kanbano/testimonials/components/bottom/bottom-svg";
import { TopSvg } from "@kanbano/testimonials/components/top/top-svg";
import { SwiperDirective } from "@kanbano/testimonials/swiper.directive";
import { createTimeline, onScroll } from "animejs";
import { register } from "swiper/element";
import { A11y, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

register();

interface Testimonial {
    id: number;
    text: string;
    authorName: string;
    authorRole: string;
    avatarSrc: string;
}

@Component({
    selector: "kanbano-lp-testimonials",
    imports: [SectionHeader, NgOptimizedImage, TopSvg, BottomSvg, SwiperDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: "./testimonials.html",
    styleUrl: "./testimonials.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);

    protected readonly testimonials = signal<Testimonial[]>([
        {
            id: 0,
            text: "Depuis qu'on utilise cet outil, on a gagné un temps énorme sur la gestion quotidienne. Tout est centralisé, plus clair.",
            authorName: "Thomas Leroy",
            authorRole: "Dirigeant, agence digitale",
            avatarSrc: "/assets/testimonials/avatar-1.png",
        },
        {
            id: 1,
            text: "Depuis qu'on utilise cet outil, on a gagné un temps énorme sur la gestion quotidienne. Tout est centralisé, plus clair.",
            authorName: "Thomas Leroy",
            authorRole: "Dirigeant, agence digitale",
            avatarSrc: "/assets/testimonials/avatar-1.png",
        },
        {
            id: 2,
            text: "Depuis qu'on utilise cet outil, on a gagné un temps énorme sur la gestion quotidienne. Tout est centralisé, plus clair.",
            authorName: "Thomas Leroy",
            authorRole: "Dirigeant, agence digitale",
            avatarSrc: "/assets/testimonials/avatar-1.png",
        },
        {
            id: 3,
            text: "Depuis qu'on utilise cet outil, on a gagné un temps énorme sur la gestion quotidienne. Tout est centralisé, plus clair.",
            authorName: "Thomas Leroy",
            authorRole: "Dirigeant, agence digitale",
            avatarSrc: "/assets/testimonials/avatar-1.png",
        },
        {
            id: 4,
            text: "Depuis qu'on utilise cet outil, on a gagné un temps énorme sur la gestion quotidienne. Tout est centralisé, plus clair.",
            authorName: "Thomas Leroy",
            authorRole: "Dirigeant, agence digitale",
            avatarSrc: "/assets/testimonials/avatar-1.png",
        },
        {
            id: 5,
            text: "Depuis qu'on utilise cet outil, on a gagné un temps énorme sur la gestion quotidienne. Tout est centralisé, plus clair.",
            authorName: "Thomas Leroy",
            authorRole: "Dirigeant, agence digitale",
            avatarSrc: "/assets/testimonials/avatar-1.png",
        },
    ]);

    swiperConfig: SwiperOptions = {
        modules: [Pagination, A11y],
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        grabCursor: true,
        pagination: { clickable: true },
        a11y: {
            enabled: true,
            prevSlideMessage: "Témoignage précédent",
            nextSlideMessage: "Témoignage suivant",
            paginationBulletMessage: "Aller au témoignage {{index}}",
            slideLabelMessage: "Témoignage {{index}} sur {{slidesLength}}",
        },
        injectStyles: [
            `.swiper { padding-bottom: 5rem; }
                             .swiper-slide { height: auto !important; }`,
        ],
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
            },
        },
    };

    constructor() {
        afterNextRender(() => {
            if (!isPlatformBrowser(this.platformId)) return;

            const prefersReducedMotion = this.document.defaultView?.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;
            if (prefersReducedMotion) return;

            const heading = this.document.querySelector<HTMLElement>('[data-animate="testimonials-heading"]');
            if (!heading) return;

            heading.style.opacity = "0";

            createTimeline({
                autoplay: onScroll({ target: heading, enter: "bottom bottom", repeat: false }),
            }).add(heading, { opacity: [0, 1], scale: [0.85, 1], duration: 600, ease: "out(2)" });
        });
    }
}
