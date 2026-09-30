import { HttpErrorResponse } from "@angular/common/http";
import { Component, computed, inject, signal } from "@angular/core";
import { email, form, FormField, FormRoot, required } from "@angular/forms/signals";
import { RouterLink } from "@angular/router";
import { SendEmailService } from "@components/layout/footer/send-email.service";
import { NavItem } from "@components/layout/header";
import { Button } from "@components/utilities/button";
import { FormError } from "@components/utilities/form-error";
import { UserThemeService } from "@kanbano/services/user-theme.service";
import { toast } from "ngx-sonner";
import { firstValueFrom } from "rxjs";

@Component({
    selector: "kanbano-lp-footer",
    imports: [Button, RouterLink, FormField, FormRoot, FormError],
    templateUrl: "./footer.html",
    styleUrl: "./footer.css",
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
            fragment: "protection",
            name: "Protection des données",
        },
    ]);

    protected readonly year = new Date().getFullYear();
    private readonly themeService = inject(UserThemeService);
    private readonly sendEmailService = inject(SendEmailService);
    protected readonly isDark = computed(() => this.themeService.theme() === "dark");
    protected readonly form = form(
        signal({ email: "" }),
        (path) => {
            required(path.email, { message: "Ce champ est obligatoire" });
            email(path.email, { message: "L'adresse email n'est pas valide" });
        },
        {
            submission: {
                action: async (field) => {
                    if (await this.join(field().value().email)) {
                        field().reset({ email: "" });
                    }
                },
            },
        },
    );

    private async join(email: string): Promise<boolean> {
        try {
            await firstValueFrom(this.sendEmailService.sendEmail(email));
            toast.success("Bienvenue dans la waitlist !", {
                description: "Vous allez recevoir un email de confirmation",
            });
            return true;
        } catch (err) {
            const errorMessage: string = err instanceof HttpErrorResponse ? (err.error?.message ?? "") : "";

            if (errorMessage.includes("déjà dans la waitlist")) {
                toast.info("Vous êtes déjà inscrit !", {
                    description: "Vous faites déjà partie de la waitlist",
                });
                return true;
            }

            toast.error("Une erreur s'est produite", {
                description: errorMessage || "Veuillez réessayer plus tard",
            });
            console.error(err);
            return false;
        }
    }
}
