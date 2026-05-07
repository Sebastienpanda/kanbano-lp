import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SectionHeader } from "@components/layout/section-header";
import { CtaActions } from "@components/utilities/cta-actions";

import { FunctionalityParticipants } from "./components/participants/functionality-participants";
import { FunctionalityTask } from "./components/task/functionality-task";
import { FunctionalityWorkspace } from "./components/workspace/functionality-workspace";

@Component({
    selector: "kanbano-lp-functionality",
    imports: [CtaActions, FunctionalityWorkspace, FunctionalityTask, FunctionalityParticipants, SectionHeader],
    templateUrl: "./functionality.html",
    styleUrl: "./functionality.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Functionality {}
