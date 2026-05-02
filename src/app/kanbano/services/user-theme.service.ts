import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { Injectable, PLATFORM_ID, effect, inject, signal } from "@angular/core";

export type UserTheme = "light" | "dark";

const STORAGE_KEY = "kanbano-theme";

@Injectable({ providedIn: "root" })
export class UserThemeService {
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);

    readonly theme = signal<UserTheme>("light");

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            const stored = localStorage.getItem(STORAGE_KEY) as UserTheme | null;
            if (stored === "light" || stored === "dark") {
                this.theme.set(stored);
            } else {
                const mql = window.matchMedia("(prefers-color-scheme: dark)");
                this.theme.set(mql.matches ? "dark" : "light");
                mql.addEventListener("change", (e) => {
                    if (!localStorage.getItem(STORAGE_KEY)) {
                        this.theme.set(e.matches ? "dark" : "light");
                    }
                });
            }
        }

        effect(() => {
            this.document.documentElement.setAttribute("data-theme", this.theme());
        });
    }

    toggle(): void {
        const next = this.theme() === "light" ? "dark" : "light";
        this.theme.set(next);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(STORAGE_KEY, next);
        }
    }
}
