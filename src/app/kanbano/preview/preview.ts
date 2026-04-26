import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SectionThemeDirective } from "@kanbano/directives/section-theme.directive";

import { Dashboard } from "./component/dashboard/dashboard";
import { TaskDetail } from "./component/task/detail/task-detail";
import { TaskView } from "./component/task/view/task-view";

@Component({
    selector: "kanbano-lp-preview",
    imports: [Dashboard, TaskView, TaskDetail, SectionThemeDirective],
    templateUrl: "./preview.html",
    styleUrl: "./preview.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Preview {}
