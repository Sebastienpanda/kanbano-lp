import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-dashboard",
    imports: [],
    templateUrl: "./dashboard.html",
    styleUrl: "./dashboard.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
