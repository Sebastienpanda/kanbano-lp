import { Component } from "@angular/core";

import { CtaActions } from "../components/utilities/cta-actions";
import { HeadingItem } from "./components/heading-item";
import { FunctionalityIcon } from "./icons/functionality-icon";
import { VectorBlueBottom } from "./svg/vector-blue-bottom";
import { VectorGreenTop } from "./svg/vector-green-top";
import { VectorPurpleTop2 } from "./svg/vector-purple-top-2";

@Component({
    selector: "kanbano-lp-functionality",
    imports: [FunctionalityIcon, CtaActions, HeadingItem, VectorGreenTop, VectorPurpleTop2, VectorBlueBottom],
    templateUrl: "./functionality.html",
    styleUrl: "./functionality.css",
})
export class Functionality {}
