import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { ArrowThreeTask } from "@kanbano/functionality/components/task/components/icon/arrow/three/arrow-three-task";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-task-create",
    imports: [ArrowThreeTask],
    templateUrl: "./task-create.html",
    styleUrl: "./task-create.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreate {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
