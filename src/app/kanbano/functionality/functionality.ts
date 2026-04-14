import { Component } from '@angular/core';
import { FunctionalityIcon } from './icons/functionality-icon';
import { CtaActions } from '../components/utilities/cta-actions';
import { HeadingItem } from './components/heading-item';
import { VectorGreenTop } from './svg/vector-green-top';
import { VectorPurpleTop2 } from './svg/vector-purple-top-2';
import { VectorBlueBottom } from './svg/vector-blue-bottom';

@Component({
    selector: 'kanbano-lp-functionality',
    imports: [
        FunctionalityIcon,
        CtaActions,
        HeadingItem,
        VectorGreenTop,
        VectorPurpleTop2,
        VectorBlueBottom,
    ],
    templateUrl: './functionality.html',
    styleUrl: './functionality.css',
})
export class Functionality {
}
