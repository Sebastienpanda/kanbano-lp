import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    DOCUMENT,
    inject,
    OnDestroy,
    signal,
} from "@angular/core";
import { Logo } from "@shared/icons/logo";

@Component({
    selector: "kanbano-lp-header",
    imports: [Logo],
    templateUrl: "./header.html",
    styleUrl: "./header.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnDestroy {
    scrolled = signal(false);
    private document = inject(DOCUMENT);

    constructor() {
        afterNextRender(() => {
            this.document.defaultView?.addEventListener("scroll", this.onScroll, { passive: true });
        });
    }

    ngOnDestroy() {
        this.document.defaultView?.removeEventListener("scroll", this.onScroll);
    }

    private onScroll = () => {
        this.scrolled.set((this.document.defaultView?.scrollY ?? 0) > 10);
    };
}
