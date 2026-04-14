import { Component, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    selector: 'kanbano-lp-vector-green-top',
    imports: [],
    templateUrl: './vector-green-top.html',
    host: {
        class: "vector-green-top"
    }
})
export class VectorGreenTop {
    protected readonly breakpoint = inject(BreakpointObserver)

    isDesktop = toSignal(
        this.breakpoint.observe('(min-width: 1024px)').pipe(map(r => r.matches)),
        {
            initialValue: false
        }
    )
}
