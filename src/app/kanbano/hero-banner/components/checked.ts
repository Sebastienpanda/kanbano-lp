import { Component, signal } from "@angular/core";

import { CheckItem } from "@components/utilities/check-item";

interface CheckedType {
    id: number;
    text: string;
}

@Component({
    selector: "kanbano-lp-checked",
    imports: [CheckItem],
    templateUrl: "./checked.html",
    styleUrl: "./checked.css",
})
export class Checked {
    protected readonly checked = signal<CheckedType[]>([
        { id: 0, text: "Accessibilité" },
        { id: 1, text: "Simplicité" },
        { id: 2, text: "Intuitivité" },
    ]);
}
