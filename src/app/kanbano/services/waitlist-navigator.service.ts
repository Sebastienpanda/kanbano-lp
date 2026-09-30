import { DOCUMENT } from "@angular/common";
import { inject, Service } from "@angular/core";

@Service()
export class WaitlistNavigator {
    private readonly document = inject(DOCUMENT);

    goToWaitlist(): void {
        const reducedMotion = this.document.defaultView?.matchMedia("(prefers-reduced-motion: reduce)").matches;

        this.document.querySelector("#waitlist")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
        this.document.querySelector<HTMLInputElement>("#newsletter-email")?.focus({ preventScroll: true });
    }
}
