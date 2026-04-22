import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { SectionHeader } from "@components/layout/section-header";

interface Testimonial {
    id: number;
    text: string;
    authorName: string;
    authorRole: string;
    avatarSrc: string;
}

@Component({
    selector: "kanbano-lp-testimonials",
    imports: [SectionHeader],
    templateUrl: "./testimonials.html",
    styleUrl: "./testimonials.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
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
            text: "L'outil est très simple à prendre en main. Même les personnes les moins à l'aise avec l'informatique s'y retrouvent rapidement.",
            authorName: "Sophie Martin",
            authorRole: "Responsable administrative",
            avatarSrc: "/assets/testimonials/avatar-2.png",
        },
        {
            id: 2,
            text: "Cet outil a complètement changé notre organisation. On a gagné en clarté, en efficacité et en sérénité dans notre gestion.",
            authorName: "Camille Durand",
            authorRole: "Fondatrice de startup",
            avatarSrc: "/assets/testimonials/avatar-3.png",
        },
    ]);
}
