import { Component } from '@angular/core';
import { Header } from './components/layout/header';
import { HeroBanner } from './hero-banner/hero-banner';
import { Preview } from './preview/preview';
import { Functionality } from './functionality/functionality';

@Component({
    selector: 'kanbano-lp-home',
    imports: [
        Header,
        HeroBanner,
        Preview,
        Functionality,
    ],
    templateUrl: './home.html',
})
export class Home {

}
