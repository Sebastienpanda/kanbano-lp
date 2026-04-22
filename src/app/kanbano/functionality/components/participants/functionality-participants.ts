import { ChangeDetectionStrategy, Component } from "@angular/core";
import { VectorGreenRightParticipant } from "@kanbano/functionality/svg/vector-green-participants/vector-green-right-participant";
import { VectorPurpleLeftParticipant } from "@kanbano/functionality/svg/vector-purple-participants/vector-purple-left-participant";

import { HeadingItem } from "../heading-item";
import { InvitationCreate } from "./components/create/invitation-create";
import { Calculator } from "./components/icons/calculator";
import { Coffee } from "./components/icons/coffee";
import { OrganisationList } from "./components/list/organisation-list";
import { OrganisationView } from "./components/view/organisation-view";

@Component({
    selector: "kanbano-lp-functionality-participants",
    imports: [
        HeadingItem,
        VectorGreenRightParticipant,
        VectorPurpleLeftParticipant,
        OrganisationList,
        OrganisationView,
        InvitationCreate,
        Coffee,
        Calculator,
    ],
    templateUrl: "./functionality-participants.html",
    styleUrl: "./functionality-participants.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalityParticipants {}
