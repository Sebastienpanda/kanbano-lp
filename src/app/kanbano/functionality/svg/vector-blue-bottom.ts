import { Component, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    selector: 'kanbano-lp-vector-blue-bottom',
    imports: [],
    templateUrl: './vector-blue-bottom.html',
    host: {
        class: "vector-blue-bottom"
    }
})
export class VectorBlueBottom {
    protected readonly breakpoint = inject(BreakpointObserver)

    isDesktop = toSignal(
        this.breakpoint.observe('(min-width: 1024px)').pipe(map(r => r.matches)),
        {
            initialValue: false
        }
    )
}
