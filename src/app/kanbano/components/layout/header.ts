import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, inject, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MobileNav } from "@components/layout/mobile-nav/mobile-nav";
import { Logo } from "@shared/icons/logo";

export interface NavItem {
    link: string;
    name: string;
}

@Component({
    selector: "kanbano-lp-header",
    imports: [Logo, RouterLink, MobileNav],
    templateUrl: "./header.html",
    styleUrl: "./header.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
    protected readonly nav = signal<NavItem[]>([
        {
            link: "fonctionnalités",
            name: "Fonctionnalités",
        },
        {
            link: "prix",
            name: "Prix",
        },
        {
            link: "témoignages",
            name: "Témoignages",
        },
        {
            link: "protection",
            name: "Protection des données",
        },
    ]);

    protected readonly isMenuOpen = signal<boolean>(false);

    private readonly document = inject(DOCUMENT);

    constructor() {
        effect(() => {
            this.document.body.style.overflow = this.isMenuOpen() ? "hidden" : "";
        });
    }

    toggleMenu(): void {
        this.isMenuOpen.update((v) => !v);
    }
}
