import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CtaActions } from "@components/utilities/cta-actions";
import { SectionThemeDirective } from "@kanbano/directives/section-theme.directive";

import { Checked } from "./components/checked";

@Component({
    selector: "kanbano-lp-hero-banner",
    imports: [CtaActions, Checked, SectionThemeDirective],
    templateUrl: "./hero-banner.html",
    styleUrl: "./hero-banner.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBanner {}
