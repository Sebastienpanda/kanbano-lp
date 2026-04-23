import { BreakpointObserver } from "@angular/cdk/layout";
import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, inject, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouterLink } from "@angular/router";
import { NavDesktop } from "@components/layout/desktop-nav/nav-desktop";
import { MobileNav } from "@components/layout/mobile-nav/mobile-nav";
import { Logo } from "@shared/icons/logo";
import { fromEvent, map, of, startWith } from "rxjs";

export interface NavItem {
    link: string;
    name: string;
}

@Component({
    selector: "kanbano-lp-header",
    imports: [Logo, RouterLink, MobileNav, NavDesktop],
    templateUrl: "./header.html",
    styleUrl: "./header.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        "[class.scrolled]": "isScrolled()",
    },
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
    private readonly window = this.document.defaultView;

    readonly isScrolled = toSignal(
        this.window
            ? fromEvent(this.window, "scroll").pipe(
                  map(() => (this.window?.scrollY ?? 0) > 10),
                  startWith(false),
              )
            : of(false),
        { initialValue: false },
    );

    constructor() {
        effect(() => {
            this.document.body.style.overflow = this.isMenuOpen() ? "hidden" : "";
        });
    }

    toggleMenu(): void {
        this.isMenuOpen.update((v) => !v);
    }

    private breakpoint = inject(BreakpointObserver);

    isDesktop = toSignal(this.breakpoint.observe("(min-width: 1200px)").pipe(map((r) => r.matches)), {
        initialValue: false,
    });
}
