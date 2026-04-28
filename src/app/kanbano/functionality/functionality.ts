import { Component } from "@angular/core";
import { CtaActions } from "@components/utilities/cta-actions";

import { FunctionalityParticipants } from "./components/participants/functionality-participants";
import { FunctionalityTask } from "./components/task/functionality-task";
import { FunctionalityWorkspace } from "./components/workspace/functionality-workspace";

@Component({
    selector: "kanbano-lp-functionality",
    imports: [CtaActions, FunctionalityWorkspace, FunctionalityTask, FunctionalityParticipants],
    templateUrl: "./functionality.html",
    styleUrl: "./functionality.css",
})
export class Functionality {}
