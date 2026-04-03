import { Component } from '@angular/core';
import { Button } from '../components/utilities/button';
import { Checked } from './components/checked';

@Component({
    selector: 'kanbano-lp-hero-banner',
    imports: [
        Button,
        Checked
    ],
    templateUrl: './hero-banner.html',
    styleUrl: './hero-banner.css',
})
export class HeroBanner {

}
