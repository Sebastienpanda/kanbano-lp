import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-workspace-view",
    imports: [],
    templateUrl: "./workspace-view.html",
    styleUrl: "./workspace-view.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceView {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
