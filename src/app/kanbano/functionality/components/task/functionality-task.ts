import { Component } from "@angular/core";
import { VectorBlueBold } from "@kanbano/functionality/svg/vector-blue-bold/vector-blue-bold";
import { VectorBlueBottom } from "@kanbano/functionality/svg/vector-blue/vector-blue-bottom";
import { VectorGreenTop } from "@kanbano/functionality/svg/vector-green/vector-green-top";
import { VectorPurpleTop2 } from "@kanbano/functionality/svg/vector-purple/vector-purple-top-2";

import { HeadingItem } from "../heading-item";
import { TaskCreate } from "./components/create/task-create";
import { TaskEmpty } from "./components/empty/task-empty";
import { Book } from "./components/icon/book";
import { TaskView } from "./components/view/task-view";

@Component({
    selector: "kanbano-lp-functionality-task",
    imports: [
        HeadingItem,
        VectorBlueBottom,
        VectorGreenTop,
        VectorPurpleTop2,
        VectorBlueBold,
        TaskEmpty,
        TaskView,
        TaskCreate,
        TaskView,
        Book,
    ],
    templateUrl: "./functionality-task.html",
    styleUrl: "./functionality-task.css",
})
export class FunctionalityTask {}
