import { Component } from "@angular/core";
import { ArrowOneDesktop } from "@kanbano/functionality/components/participants/components/icons/arrow/desktop/one/arrow-one-desktop";
import { ArrowThreeDesktop } from "@kanbano/functionality/components/participants/components/icons/arrow/desktop/three/arrow-three-desktop";
import { ArrowTwoDesktop } from "@kanbano/functionality/components/participants/components/icons/arrow/desktop/two/arrow-two-desktop";
import { ArrowOneMobile } from "@kanbano/functionality/components/participants/components/icons/arrow/mobile/one/arrow-one-mobile";
import { ArrowTwoMobile } from "@kanbano/functionality/components/participants/components/icons/arrow/mobile/two/arrow-two-mobile";

@Component({
    selector: "kanbano-lp-organisation-list",
    imports: [ArrowOneMobile, ArrowTwoMobile, ArrowOneDesktop, ArrowTwoDesktop, ArrowThreeDesktop],
    templateUrl: "./organisation-list.html",
    styleUrl: "./organisation-list.css",
})
export class OrganisationList {}
