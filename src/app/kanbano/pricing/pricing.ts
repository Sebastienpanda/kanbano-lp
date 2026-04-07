import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '../components/utilities/button';
import { CheckedIcon } from '../hero-banner/icon/checked-icon';

@Component({
    selector: 'kanbano-lp-pricing',
    imports: [
        Button,
        CheckedIcon,
    ],
    templateUrl: './pricing.html',
    styleUrl: './pricing.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pricing {
}
