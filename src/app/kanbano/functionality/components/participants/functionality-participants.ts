import { Component } from "@angular/core";

import { VectorGreenRightParticipant } from "../../svg/vector-green-participants/vector-green-right-participant";
import { VectorPurpleLeftParticipant } from "../../svg/vector-purple-participants/vector-purple-left-participant";
import { HeadingItem } from "../heading-item";

@Component({
    selector: "kanbano-lp-functionality-participants",
    imports: [HeadingItem, VectorGreenRightParticipant, VectorPurpleLeftParticipant],
    templateUrl: "./functionality-participants.html",
    styleUrl: "./functionality-participants.css",
})
export class FunctionalityParticipants {}
