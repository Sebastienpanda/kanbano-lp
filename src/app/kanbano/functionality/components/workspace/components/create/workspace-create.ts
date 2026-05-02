import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { ArrowThree } from "@kanbano/functionality/components/workspace/components/icons/arrow/three/arrow-three";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-workspace-create",
    imports: [ArrowThree],
    templateUrl: "./workspace-create.html",
    styleUrl: "./workspace-create.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceCreate {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
