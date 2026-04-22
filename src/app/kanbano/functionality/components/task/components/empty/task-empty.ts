import { Component } from "@angular/core";
import { ArrowOneTaskLaptop } from "@kanbano/functionality/components/task/components/icon/arrow/one/laptop/arrow-one-task-laptop";
import { ArrowOneTask } from "@kanbano/functionality/components/task/components/icon/arrow/one/mobile/arrow-one-task";
import { ArrowTwoTask } from "@kanbano/functionality/components/task/components/icon/arrow/two/arrow-two-task";

@Component({
    selector: "kanbano-lp-task-empty",
    imports: [ArrowOneTask, ArrowOneTaskLaptop, ArrowTwoTask],
    templateUrl: "./task-empty.html",
    styleUrl: "./task-empty.css",
})
export class TaskEmpty {}
