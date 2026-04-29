import { Component } from "@angular/core";
import { Header } from "@components/layout/header";
import { DataProtection } from "@kanbano/data-protection/data-protection";
import { Pricing } from "@kanbano/pricing/pricing";
import { Testimonials } from "@kanbano/testimonials/testimonials";

import { Functionality } from "./functionality/functionality";
import { HeroBanner } from "./hero-banner/hero-banner";
import { Preview } from "./preview/preview";

@Component({
    selector: "kanbano-lp-home",
    imports: [Header, HeroBanner, Preview, Functionality, Pricing, Testimonials, DataProtection],
    templateUrl: "./home.html",
})
export class Home {}
