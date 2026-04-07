import { Component } from '@angular/core';
import { Header } from './components/layout/header';
import { HeroBanner } from './hero-banner/hero-banner';
import { Preview } from './preview/preview';
import { Functionality } from './functionality/functionality';
import { Pricing } from './pricing/pricing';
import { Testimonials } from './testimonials/testimonials';
import { DataProtection } from './data-protection/data-protection';
import { Footer } from './components/layout/footer/footer';

@Component({
    selector: 'kanbano-lp-home',
    imports: [
        Header,
        HeroBanner,
        Preview,
        Functionality,
        Pricing,
        Testimonials,
        DataProtection,
        Footer,
    ],
    templateUrl: './home.html',
})
export class Home {

}
