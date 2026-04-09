import { Component, inject } from '@angular/core';
import { PurpleSvg } from './svg/purple-svg';
import { PurpleLightSvg } from './svg/purple-light-svg';
import { PinkSvg } from './svg/pink-svg';
import { GreenSvg } from './svg/green-svg';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    selector: 'kanbano-lp-preview',
    imports: [
        PurpleSvg,
        PurpleLightSvg,
        PinkSvg,
        GreenSvg
    ],
    templateUrl: './preview.html',
    styleUrl: './preview.css',
})
export class Preview {
    protected readonly breakpoint = inject(BreakpointObserver)

    isDesktop = toSignal(
        this.breakpoint.observe('(min-width: 1200px)').pipe(map(r => r.matches)),
        {
            initialValue: false
        }
    )
}
