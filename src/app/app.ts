import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { register } from "swiper/element/bundle";

register();

@Component({
    selector: "kanbano-lp-root",
    imports: [RouterOutlet],
    templateUrl: "./app.html",
})
export class App {}
