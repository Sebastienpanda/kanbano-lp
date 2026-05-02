import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-task-view",
    imports: [],
    templateUrl: "./task-view.html",
    styleUrl: "./task-view.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskView {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
