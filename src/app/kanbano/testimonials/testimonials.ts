import { NgOptimizedImage } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    ElementRef,
    afterNextRender,
    signal,
    viewChild,
} from "@angular/core";
import { SectionHeader } from "@components/layout/section-header";
import { BottomSvg } from "@kanbano/testimonials/components/bottom/bottom-svg";
import { TopSvg } from "@kanbano/testimonials/components/top/top-svg";
import { SwiperContainer } from "swiper/element";

interface Testimonial {
    id: number;
    text: string;
    authorName: string;
    authorRole: string;
    avatarSrc: string;
}

@Component({
    selector: "kanbano-lp-testimonials",
    imports: [SectionHeader, NgOptimizedImage, TopSvg, BottomSvg],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: "./testimonials.html",
    styleUrl: "./testimonials.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
    private readonly swiperEl = viewChild<ElementRef<HTMLElement>>("swiperEl");

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

    constructor() {
        afterNextRender(() => {
            import("swiper/element/bundle").then(({ register }) => {
                register();

                const el = this.swiperEl()?.nativeElement as SwiperContainer;
                if (!el) return;

                Object.assign(el, {
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
                });

                el.initialize();
            });
        });
    }
}
