import { Component, signal } from '@angular/core';
import { CheckedIcon } from './icon/checked-icon';

interface CheckedType {
    id: number;
    text: string;
}

@Component({
    selector: 'kanbano-lp-checked',
    imports: [
        CheckedIcon
    ],
    templateUrl: './checked.html',
    styleUrl: './checked.css',
})
export class Checked {
    protected readonly checked = signal<CheckedType[]>([
        {
            id: 0,
            text: "Accessibilité"
        },
        {
            id: 1,
            text: "Simplicité"
        },
        {
            id: 2,
            text: "Intuitivité"
        }
    ])
}
