import { Component, input } from '@angular/core';

@Component({
    selector: 'kanbano-lp-functionality-heading',
    imports: [],
    templateUrl: './heading-item.html',
    styleUrl: './heading-item.css',
})
export class HeadingItem {
    readonly name = input.required<string>();
    readonly title = input.required<string>();
    readonly description = input.required<string>();
    readonly bold = input.required<string>();
}
