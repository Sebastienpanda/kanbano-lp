import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

import { GreenDesktopSvg } from "./svg/green-desktop-svg";
import { GreenSvg } from "./svg/green-svg";
import { PinkDesktopSvg } from "./svg/pink-desktop-svg";
import { PinkSvg } from "./svg/pink-svg";
import { PurpleDesktopSvg } from "./svg/purple-desktop-svg";
import { PurpleLightSvg } from "./svg/purple-light-svg";
import { PurpleSvg } from "./svg/purple-svg";

@Component({
    selector: "kanbano-lp-preview",
    imports: [PurpleSvg, PurpleLightSvg, PinkSvg, GreenSvg, GreenDesktopSvg, PurpleDesktopSvg, PinkDesktopSvg],
    templateUrl: "./preview.html",
    styleUrl: "./preview.css",
})
export class Preview {
    protected readonly breakpoint = inject(BreakpointObserver);

    isDesktop = toSignal(this.breakpoint.observe("(min-width: 1200px)").pipe(map((r) => r.matches)), {
        initialValue: false,
    });
}
