import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-footer",
    imports: [],
    templateUrl: "./footer.html",
    styleUrl: "./footer.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
