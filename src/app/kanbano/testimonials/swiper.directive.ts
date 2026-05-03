import { isPlatformBrowser } from "@angular/common";
import { afterNextRender, Directive, ElementRef, inject, input, PLATFORM_ID } from "@angular/core";
import { SwiperContainer } from "swiper/element";
import { SwiperOptions } from "swiper/types";

@Directive({
    selector: "[kanbanoDirectiveSwiper]",
})
export class SwiperDirective {
    readonly config = input<SwiperOptions>();

    private readonly el = inject<ElementRef<SwiperContainer>>(ElementRef);
    readonly platformId = inject(PLATFORM_ID);

    constructor() {
        afterNextRender(() => {
            if (!isPlatformBrowser(this.platformId)) return;

            if (!this.config()) {
                console.warn("kanbanoDirectiveSwiper: No configuration provided.");
                return;
            }

            Object.assign(this.el.nativeElement, this.config());
            this.el.nativeElement.initialize();
        });
    }
}
