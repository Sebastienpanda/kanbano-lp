import { Component } from '@angular/core';
import { CtaActions } from '../components/utilities/cta-actions';
import { Checked } from './components/checked';

@Component({
    selector: 'kanbano-lp-hero-banner',
    imports: [CtaActions, Checked],
    templateUrl: './hero-banner.html',
    styleUrl: './hero-banner.css',
})
export class HeroBanner {
}
