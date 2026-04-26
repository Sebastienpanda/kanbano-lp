import { isPlatformBrowser } from "@angular/common";
import { Directive, ElementRef, OnInit, inject, PLATFORM_ID, input } from "@angular/core";
import { SectionTheme, ThemeObserverService } from "@kanbano/services/theme-observer.service";

@Directive({
    selector: "[kanbanoDirectiveSectionTheme]",
    standalone: true,
})
export class SectionThemeDirective implements OnInit {
    readonly kanbanoDirectiveSectionTheme = input.required<SectionTheme>();

    private readonly platformId = inject(PLATFORM_ID);
    private readonly el = inject(ElementRef<HTMLElement>);
    private readonly themeObserver = inject(ThemeObserverService);

    ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) return;
        this.themeObserver.observe(this.el.nativeElement, this.kanbanoDirectiveSectionTheme());
    }
}
