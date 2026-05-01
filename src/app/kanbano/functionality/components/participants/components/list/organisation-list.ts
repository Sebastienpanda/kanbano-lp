import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { ArrowOneDesktop } from "@kanbano/functionality/components/participants/components/icons/arrow/desktop/one/arrow-one-desktop";
import { ArrowThreeDesktop } from "@kanbano/functionality/components/participants/components/icons/arrow/desktop/three/arrow-three-desktop";
import { ArrowTwoDesktop } from "@kanbano/functionality/components/participants/components/icons/arrow/desktop/two/arrow-two-desktop";
import { ArrowOneMobile } from "@kanbano/functionality/components/participants/components/icons/arrow/mobile/one/arrow-one-mobile";
import { ArrowTwoMobile } from "@kanbano/functionality/components/participants/components/icons/arrow/mobile/two/arrow-two-mobile";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-organisation-list",
    imports: [ArrowOneMobile, ArrowTwoMobile, ArrowOneDesktop, ArrowTwoDesktop, ArrowThreeDesktop],
    templateUrl: "./organisation-list.html",
    styleUrl: "./organisation-list.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationList {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
