import { Component } from "@angular/core";
import { ArrowFour } from "@kanbano/functionality/components/workspace/components/icons/arrow/four/arrow-four";
import { ArrowOne } from "@kanbano/functionality/components/workspace/components/icons/arrow/one/arrow-one";
import { ArrowTwo } from "@kanbano/functionality/components/workspace/components/icons/arrow/two/arrow-two";

@Component({
    selector: "kanbano-lp-workspace-empty",
    imports: [ArrowFour, ArrowOne, ArrowTwo],
    templateUrl: "./workspace-empty.html",
    styleUrl: "./workspace-empty.css",
})
export class WorkspaceEmpty {}
