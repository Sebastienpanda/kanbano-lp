import { Component } from '@angular/core';
import { Logo } from '../../shared/icons/logo';

@Component({
    selector: 'kanbano-lp-header',
    imports: [
        Logo
    ],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {

}
