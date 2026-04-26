import { BreakpointObserver } from "@angular/cdk/layout";
import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, inject, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouterLink } from "@angular/router";
import { NavDesktop } from "@components/layout/desktop-nav/nav-desktop";
import { MobileNav } from "@components/layout/mobile-nav/mobile-nav";
import { Button } from "@components/utilities/button";
import { ThemeObserverService } from "@kanbano/services/theme-observer.service";
import { map } from "rxjs";

export interface NavItem {
    link: string;
    name: string;
}

@Component({
    selector: "kanbano-lp-header",
    imports: [RouterLink, MobileNav, NavDesktop, Button],
    templateUrl: "./header.html",
    styleUrl: "./header.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
    protected readonly theme = inject(ThemeObserverService).currentTheme;

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

    private breakpoint = inject(BreakpointObserver);

    isDesktop = toSignal(this.breakpoint.observe("(min-width: 1280px)").pipe(map((r) => r.matches)), {
        initialValue: false,
    });
}
