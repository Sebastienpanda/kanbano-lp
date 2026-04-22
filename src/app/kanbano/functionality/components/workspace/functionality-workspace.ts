import { ChangeDetectionStrategy, Component } from "@angular/core";
import { VectorBlueBottom } from "@kanbano/functionality/svg/vector-blue/vector-blue-bottom";
import { VectorGreenTop } from "@kanbano/functionality/svg/vector-green/vector-green-top";
import { VectorPurpleTop2 } from "@kanbano/functionality/svg/vector-purple/vector-purple-top-2";

import { HeadingItem } from "../heading-item";
import { WorkspaceCreate } from "./components/create/workspace-create";
import { WorkspaceEmpty } from "./components/empty/workspace-empty";
import { Laptop } from "./components/icons/laptop";
import { Loupe } from "./components/icons/loupe";
import { Paper } from "./components/icons/paper";
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
        Loupe,
        Laptop,
        Paper,
    ],
    templateUrl: "./functionality-workspace.html",
    styleUrl: "./functionality-workspace.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalityWorkspace {}
