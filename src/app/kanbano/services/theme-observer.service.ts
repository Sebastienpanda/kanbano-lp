import { isPlatformBrowser } from "@angular/common";
import { Injectable, signal, inject, PLATFORM_ID } from "@angular/core";

export type SectionTheme = "light" | "dark";

@Injectable({ providedIn: "root" })
export class ThemeObserverService {
    private readonly platformId = inject(PLATFORM_ID);
    private readonly intersecting = new Map<Element, SectionTheme>();
    readonly currentTheme = signal<SectionTheme>("dark");

    observe(element: HTMLElement, theme: SectionTheme): void {
        if (!isPlatformBrowser(this.platformId)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.intersecting.set(entry.target, theme);
                    } else {
                        this.intersecting.delete(entry.target);
                    }
                });
                const themes = [...this.intersecting.values()];
                this.currentTheme.set(themes.at(-1) ?? "dark");
            },
            {
                threshold: 0,
                rootMargin: "0px 0px -90% 0px",
            },
        );

        observer.observe(element);
    }
}
