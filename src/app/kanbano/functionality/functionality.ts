import { Component } from '@angular/core';
import { FunctionalityIcon } from './icons/functionality-icon';
import { VectorGreenTop } from './svg/vector-green-top';
import { VectorPurpleTop2 } from './svg/vector-purple-top-2';
import { VectorBlueBottom } from './svg/vector-blue-bottom';
import { Button } from '../components/utilities/button';

@Component({
    selector: 'kanbano-lp-functionality',
    imports: [
        FunctionalityIcon,
        VectorGreenTop,
        VectorPurpleTop2,
        VectorBlueBottom,
        Button,
    ],
    templateUrl: './functionality.html',
    styleUrl: './functionality.css',
})
export class Functionality {

}
