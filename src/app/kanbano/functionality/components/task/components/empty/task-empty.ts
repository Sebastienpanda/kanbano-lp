import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { ArrowOneTaskLaptop } from "@kanbano/functionality/components/task/components/icon/arrow/one/laptop/arrow-one-task-laptop";
import { ArrowOneTask } from "@kanbano/functionality/components/task/components/icon/arrow/one/mobile/arrow-one-task";
import { ArrowTwoTask } from "@kanbano/functionality/components/task/components/icon/arrow/two/arrow-two-task";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-task-empty",
    imports: [ArrowOneTask, ArrowOneTaskLaptop, ArrowTwoTask],
    templateUrl: "./task-empty.html",
    styleUrl: "./task-empty.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEmpty {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
