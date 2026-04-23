import { Component } from "@angular/core";
import { Header } from "@components/layout/header";
import { Pricing } from "@kanbano/pricing/pricing";

import { Functionality } from "./functionality/functionality";
import { HeroBanner } from "./hero-banner/hero-banner";
import { Preview } from "./preview/preview";

@Component({
    selector: "kanbano-lp-home",
    imports: [Header, HeroBanner, Preview, Functionality, Pricing],
    templateUrl: "./home.html",
})
export class Home {}
