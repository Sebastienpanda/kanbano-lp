import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-invitation-create",
    imports: [],
    templateUrl: "./invitation-create.html",
    styleUrl: "./invitation-create.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvitationCreate {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
