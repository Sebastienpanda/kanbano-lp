import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { UserThemeService } from "@kanbano/services/user-theme.service";

@Component({
    selector: "kanbano-lp-organisation-view",
    imports: [],
    templateUrl: "./organisation-view.html",
    styleUrl: "./organisation-view.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationView {
    private readonly themeService = inject(UserThemeService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
}
