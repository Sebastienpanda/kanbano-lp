import { Component } from "@angular/core";
import { ArrowOneTaskLaptop } from "@kanbano/functionality/components/task/components/icon/arrow/one/laptop/arrow-one-task-laptop";
import { ArrowOneTask } from "@kanbano/functionality/components/task/components/icon/arrow/one/mobile/arrow-one-task";
import { ArrowThreeTask } from "@kanbano/functionality/components/task/components/icon/arrow/three/arrow-three-task";
import { ArrowTwoTask } from "@kanbano/functionality/components/task/components/icon/arrow/two/arrow-two-task";

@Component({
    selector: "kanbano-lp-task-create",
    imports: [ArrowOneTask, ArrowOneTaskLaptop, ArrowTwoTask, ArrowThreeTask],
    templateUrl: "./task-create.html",
    styleUrl: "./task-create.css",
})
export class TaskCreate {}
