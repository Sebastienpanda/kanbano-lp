import { ChangeDetectionStrategy, Component } from "@angular/core";

import { VectorBlueBottom } from "../../svg/vector-blue/vector-blue-bottom";
import { VectorGreenTop } from "../../svg/vector-green/vector-green-top";
import { VectorPurpleTop2 } from "../../svg/vector-purple/vector-purple-top-2";
import { HeadingItem } from "../heading-item";
import { WorkspaceCreate } from "./components/create/workspace-create";
import { WorkspaceEmpty } from "./components/empty/workspace-empty";
import { WorkspaceView } from "./components/view/workspace-view";

@Component({
    selector: "kanbano-lp-functionality-workspace",
    imports: [
        HeadingItem,
        VectorBlueBottom,
        VectorGreenTop,
        VectorPurpleTop2,
        WorkspaceEmpty,
        WorkspaceCreate,
        WorkspaceView,
    ],
    templateUrl: "./functionality-workspace.html",
    styleUrl: "./functionality-workspace.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalityWorkspace {}
