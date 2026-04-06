import { Component } from '@angular/core';
import { FunctionalityIcon } from './icons/functionality-icon';
import { VectorGreenTop } from './svg/vector-green-top';
import { VectorPurpleTop2 } from './svg/vector-purple-top-2';

@Component({
    selector: 'kanbano-lp-functionality',
    imports: [
        FunctionalityIcon,
        VectorGreenTop,
        VectorPurpleTop2
    ],
    templateUrl: './functionality.html',
    styleUrl: './functionality.css',
})
export class Functionality {

}
