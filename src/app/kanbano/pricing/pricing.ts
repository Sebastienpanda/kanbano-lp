import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '../components/utilities/button';
import { CheckItem } from '../components/utilities/check-item';
import { SectionHeader } from '../components/layout/section-header';

@Component({
    selector: 'kanbano-lp-pricing',
    imports: [Button, CheckItem, SectionHeader],
    templateUrl: './pricing.html',
    styleUrl: './pricing.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pricing {
}
