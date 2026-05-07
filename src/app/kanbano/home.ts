import { Component } from "@angular/core";
import { Footer } from "@components/layout/footer/footer";
import { Header } from "@components/layout/header";
import { DataProtection } from "@kanbano/data-protection/data-protection";
import { Modal } from "@kanbano/modal/modal";
import { Pricing } from "@kanbano/pricing/pricing";
import { NgxSonnerToaster } from "ngx-sonner";

import { Functionality } from "./functionality/functionality";
import { HeroBanner } from "./hero-banner/hero-banner";
import { Preview } from "./preview/preview";

@Component({
    selector: "kanbano-lp-home",
    imports: [Header, HeroBanner, Preview, Functionality, Pricing, DataProtection, Footer, NgxSonnerToaster, Modal],
    templateUrl: "./home.html",
})
export class Home {}
