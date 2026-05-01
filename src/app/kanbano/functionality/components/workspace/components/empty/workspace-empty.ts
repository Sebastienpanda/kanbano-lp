import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { ArrowFour } from "@kanbano/functionality/components/workspace/components/icons/arrow/four/arrow-four";
import { ArrowOne } from "@kanbano/functionality/components/workspace/components/icons/arrow/one/arrow-one";
import { ArrowTwo } from "@kanbano/functionality/components/workspace/components/icons/arrow/two/arrow-two";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-workspace-empty",
    imports: [ArrowFour, ArrowOne, ArrowTwo],
    templateUrl: "./workspace-empty.html",
    styleUrl: "./workspace-empty.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceEmpty {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
