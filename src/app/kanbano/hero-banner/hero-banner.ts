import { Component, inject } from '@angular/core';
import { CtaActions } from '../components/utilities/cta-actions';
import { Checked } from './components/checked';
import { NgOptimizedImage } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    selector: 'kanbano-lp-hero-banner',
    imports: [CtaActions, Checked, NgOptimizedImage],
    templateUrl: './hero-banner.html',
    styleUrl: './hero-banner.css',
})
export class HeroBanner {
    protected readonly breakpoint = inject(BreakpointObserver)

    isDesktop = toSignal(
        this.breakpoint.observe('(min-width: 1200px)').pipe(map(r => r.matches)),
        {
            initialValue: false
        }
    )
}
