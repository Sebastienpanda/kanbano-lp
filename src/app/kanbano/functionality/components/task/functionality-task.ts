import { ChangeDetectionStrategy, Component } from "@angular/core";

import { VectorBlueBold } from "../../svg/vector-blue-bold/vector-blue-bold";
import { VectorBlueBottom } from "../../svg/vector-blue/vector-blue-bottom";
import { VectorGreenTop } from "../../svg/vector-green/vector-green-top";
import { VectorPurpleTop2 } from "../../svg/vector-purple/vector-purple-top-2";
import { HeadingItem } from "../heading-item";
import { TaskColumnsViewSvg } from "./components/task-columns-view-svg/task-columns-view-svg";
import { TaskCreateSvg } from "./components/task-create-svg/task-create-svg";
import { TaskViewSvg } from "./components/task-view-svg/task-view-svg";

@Component({
    selector: "kanbano-lp-functionality-task",
    imports: [
        HeadingItem,
        VectorBlueBottom,
        VectorGreenTop,
        VectorPurpleTop2,
        VectorBlueBold,
        TaskViewSvg,
        TaskCreateSvg,
        TaskColumnsViewSvg,
    ],
    templateUrl: "./functionality-task.html",
    styleUrl: "./functionality-task.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalityTask {}
