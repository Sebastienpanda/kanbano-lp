import { Component } from '@angular/core';
import { FunctionalityIcon } from './icons/functionality-icon';
import { Button } from '../components/utilities/button';

@Component({
    selector: 'kanbano-lp-functionality',
    imports: [
        FunctionalityIcon,
        Button,
    ],
    templateUrl: './functionality.html',
    styleUrl: './functionality.css',
})
export class Functionality {

}
