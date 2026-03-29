import { Component } from '@angular/core';
import { Header } from './components/layout/header';

@Component({
    selector: 'kanbano-lp-home',
    imports: [
        Header
    ],
    templateUrl: './home.html',
})
export class Home {

}
