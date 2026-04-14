import { Component, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    selector: 'kanbano-lp-vector-purple-top-2',
    imports: [],
    templateUrl: './vector-purple-top-2.html',
    host: {
        class: "vector-purple-top-2"
    }
})
export class VectorPurpleTop2 {
    protected readonly breakpoint = inject(BreakpointObserver)

    isDesktop = toSignal(
        this.breakpoint.observe('(min-width: 1024px)').pipe(map(r => r.matches)),
        {
            initialValue: false
        }
    )
}
