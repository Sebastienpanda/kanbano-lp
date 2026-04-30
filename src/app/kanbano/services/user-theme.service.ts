import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { Injectable, PLATFORM_ID, effect, inject, signal } from "@angular/core";

export type UserTheme = "light" | "dark";

@Injectable({ providedIn: "root" })
export class UserThemeService {
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);

    readonly theme = signal<UserTheme>("light");

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            const stored = localStorage.getItem("kanbano-theme") as UserTheme | null;
            if (stored === "light" || stored === "dark") this.theme.set(stored);
        }

        effect(() => {
            const t = this.theme();
            this.document.documentElement.setAttribute("data-theme", t);
            if (isPlatformBrowser(this.platformId)) {
                localStorage.setItem("kanbano-theme", t);
            }
        });
    }

    toggle(): void {
        this.theme.update((t) => (t === "light" ? "dark" : "light"));
    }
}
