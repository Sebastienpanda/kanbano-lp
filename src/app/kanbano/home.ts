import { Component } from '@angular/core';
import { Header } from './components/layout/header';
import { HeroBanner } from './hero-banner/hero-banner';
import { Preview } from './preview/preview';

@Component({
    selector: 'kanbano-lp-home',
    imports: [
        Header,
        HeroBanner,
        Preview
    ],
    templateUrl: './home.html',
})
export class Home {

}
