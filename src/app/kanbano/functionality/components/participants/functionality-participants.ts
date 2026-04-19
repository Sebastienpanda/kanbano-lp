import { ChangeDetectionStrategy, Component } from "@angular/core";

import { VectorGreenRightParticipant } from "../../svg/vector-green-participants/vector-green-right-participant";
import { VectorPurpleLeftParticipant } from "../../svg/vector-purple-participants/vector-purple-left-participant";
import { HeadingItem } from "../heading-item";
import { InvitationCreateSvg } from "./components/invitation-create-svg/invitation-create-svg";
import { OrganisationProfilSvg } from "./components/organisation-profil-svg/organisation-profil-svg";
import { OrganisationViewSvg } from "./components/organisation-view-svg/organisation-view-svg";

@Component({
    selector: "kanbano-lp-functionality-participants",
    imports: [
        HeadingItem,
        VectorGreenRightParticipant,
        VectorPurpleLeftParticipant,
        OrganisationViewSvg,
        InvitationCreateSvg,
        OrganisationProfilSvg,
    ],
    templateUrl: "./functionality-participants.html",
    styleUrl: "./functionality-participants.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalityParticipants {}
