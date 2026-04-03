import { Component } from '@angular/core';
import { Header } from './components/layout/header';
import { HeroBanner } from './hero-banner/hero-banner';

@Component({
    selector: 'kanbano-lp-home',
    imports: [
        Header,
        HeroBanner
    ],
    templateUrl: './home.html',
})
export class Home {

}
