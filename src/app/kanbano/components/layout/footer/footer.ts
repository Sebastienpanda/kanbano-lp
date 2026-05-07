import { ChangeDetectionStrategy, Component, computed, inject, signal } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { SendEmailService } from "@components/layout/footer/send-email.service";
import { NavItem } from "@components/layout/header";
import { Button } from "@components/utilities/button";
import { FormError } from "@components/utilities/form-error";
import { UserThemeService } from "@kanbano/services/user-theme.service";
import { toast } from "ngx-sonner";

interface EmailForm {
    email: FormControl<string>;
}

@Component({
    selector: "kanbano-lp-footer",
    imports: [Button, RouterLink, FormsModule, ReactiveFormsModule, FormError],
    templateUrl: "./footer.html",
    styleUrl: "./footer.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
    protected readonly nav = signal<NavItem[]>([
        {
            fragment: "fonctionnalités",
            name: "Fonctionnalités",
        },
        {
            fragment: "prix",
            name: "Prix",
        },
        {
            fragment: "témoignages",
            name: "Témoignages",
        },
        {
            fragment: "protection",
            name: "Protection des données",
        },
    ]);

    protected readonly year = new Date().getFullYear();
    private readonly themeService = inject(UserThemeService);
    private readonly sendEmailService = inject(SendEmailService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
    protected readonly form = new FormGroup<EmailForm>({
        email: new FormControl("", {
            validators: [Validators.required, Validators.email],
            nonNullable: true,
        }),
    });

    onSubmit(): void {
        if (this.form.valid) {
            const { email } = this.form.getRawValue();

            this.sendEmailService.sendEmail(email).subscribe({
                next: (): void => {
                    toast.success("Bienvenue dans la waitlist !", {
                        description: "Vous allez recevoir un email de confirmation",
                    });
                    this.form.reset();
                },
                error: (err): void => {
                    const errorMessage = err.error?.message || "";

                    if (errorMessage.includes("déjà dans la waitlist")) {
                        toast.info("Vous êtes déjà inscrit !", {
                            description: "Vous faites déjà partie de la waitlist",
                        });
                        this.form.reset();
                    } else {
                        toast.error("Une erreur s'est produite", {
                            description: errorMessage || "Veuillez réessayer plus tard",
                        });
                        console.error(err);
                    }
                },
            });
        }
    }
}
