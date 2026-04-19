import { ChangeDetectionStrategy, Component } from "@angular/core";

import { VectorBlueBottom } from "../../svg/vector-blue/vector-blue-bottom";
import { VectorGreenTop } from "../../svg/vector-green/vector-green-top";
import { VectorPurpleTop2 } from "../../svg/vector-purple/vector-purple-top-2";
import { HeadingItem } from "../heading-item";
import { WorkspaceCreateSvg } from "./components/create/workspace-create-svg";
import { WorkspaceSvg } from "./components/empty/workspace-svg";
import { WorkspaceViewSvg } from "./components/view/workspace-view-svg";

@Component({
    selector: "kanbano-lp-functionality-workspace",
    imports: [
        HeadingItem,
        VectorBlueBottom,
        VectorGreenTop,
        VectorPurpleTop2,
        WorkspaceSvg,
        WorkspaceCreateSvg,
        WorkspaceViewSvg,
    ],
    templateUrl: "./functionality-workspace.html",
    styleUrl: "./functionality-workspace.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalityWorkspace {}
