import { Component } from "@angular/core";

import { VectorBlueBottom } from "../../svg/vector-blue/vector-blue-bottom";
import { VectorGreenTop } from "../../svg/vector-green/vector-green-top";
import { VectorPurpleTop2 } from "../../svg/vector-purple/vector-purple-top-2";
import { HeadingItem } from "../heading-item";

@Component({
    selector: "kanbano-lp-functionality-workspace",
    imports: [HeadingItem, VectorBlueBottom, VectorGreenTop, VectorPurpleTop2],
    templateUrl: "./functionality-workspace.html",
    styleUrl: "./functionality-workspace.css",
})
export class FunctionalityWorkspace {}
