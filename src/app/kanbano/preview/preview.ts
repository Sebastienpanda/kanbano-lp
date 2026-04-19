import { ChangeDetectionStrategy, Component } from "@angular/core";

import { DashboardSvg } from "./component/dashboard/dashboard-svg";
import { TaskDetailSvg } from "./component/task/detail/task-detail-svg";
import { TaskViewSvg } from "./component/task/view/task-view-svg";

@Component({
    selector: "kanbano-lp-preview",
    imports: [DashboardSvg, TaskViewSvg, TaskDetailSvg],
    templateUrl: "./preview.html",
    styleUrl: "./preview.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Preview {}
