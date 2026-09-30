import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import {
    afterRenderEffect,
    Component,
    DestroyRef,
    effect,
    ElementRef,
    inject,
    PLATFORM_ID,
    signal,
    viewChild,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { email, form, FormField, FormRoot, required } from "@angular/forms/signals";
import { ActivatedRoute, Router } from "@angular/router";
import { SendEmailService } from "@components/layout/footer/send-email.service";
import { FormError } from "@components/utilities/form-error";
import { VerifyToken } from "@kanbano/modal/modal.service";
import { filter, firstValueFrom } from "rxjs";

@Component({
    selector: "kanbano-lp-modal",
    imports: [FormField, FormRoot, FormError],
    templateUrl: "./modal.html",
    styleUrl: "./modal.css",
})
export class Modal {
    protected readonly token = signal<string | null>(null);
    protected readonly isOpen = signal<boolean>(false);
    protected readonly isLoading = signal<boolean>(false);
    protected readonly resendError = signal<string>("");
    protected readonly message = signal<string>("");
    protected readonly verificationStatus = signal<"success" | "error" | "info" | null>(null);

    private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>("dialog");
    private readonly document = inject(DOCUMENT);
    private readonly destroyRef = inject(DestroyRef);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly sendEmailService = inject(SendEmailService);
    protected readonly verifyToken = inject(VerifyToken);
    protected readonly router = inject(Router);
    protected readonly route = inject(ActivatedRoute);

    protected readonly resendForm = form(
        signal({ email: "" }),
        (path) => {
            required(path.email, { message: "Ce champ est obligatoire" });
            email(path.email, { message: "L'adresse email n'est pas valide" });
        },
        {
            submission: {
                action: async (field) => {
                    await this.resend(field().value().email);
                },
            },
        },
    );

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            this.route.queryParams
                .pipe(
                    filter((params) => !!params["token"]),
                    takeUntilDestroyed(this.destroyRef),
                )
                .subscribe((params) => {
                    this.token.set(params["token"]);
                    this.open();
                });
        }

        effect(() => {
            const tokenValue = this.token();
            if (tokenValue && this.isOpen() && !this.verificationStatus()) {
                this.verifyWaitlistToken();
            }

            this.document.documentElement.style.overflow = this.isOpen() ? "hidden" : "";
        });

        afterRenderEffect(() => {
            const dialog = this.dialog()?.nativeElement;
            if (dialog && !dialog.open) dialog.showModal();
        });
    }

    open(): void {
        this.isOpen.set(true);
    }

    close(): void {
        if (!this.isOpen()) return;

        this.isOpen.set(false);
        void this.router.navigate([], {
            queryParams: { token: null },
            queryParamsHandling: "merge",
            replaceUrl: true,
        });
    }

    private async resend(email: string): Promise<void> {
        this.resendError.set("");

        try {
            await firstValueFrom(this.sendEmailService.resendEmail(email));
            this.verificationStatus.set("info");
        } catch (error) {
            const apiMessage: unknown = error instanceof HttpErrorResponse ? error.error?.message : undefined;
            this.resendError.set(
                typeof apiMessage === "string" && apiMessage
                    ? apiMessage
                    : "Une erreur s'est produite, veuillez réessayer",
            );
        }
    }

    private verifyWaitlistToken(): void {
        const tokenValue = this.token();
        if (!tokenValue) return;

        this.isLoading.set(true);
        this.verificationStatus.set(null);

        this.verifyToken.verifyToken(tokenValue).subscribe({
            next: (response) => {
                this.isLoading.set(false);
                this.verificationStatus.set("success");
                this.message.set(response.message);
            },
            error: (error) => {
                this.isLoading.set(false);
                const errorMessage = error.error?.message || "Une erreur s'est produite lors de la vérification";
                this.verificationStatus.set("error");
                this.message.set(errorMessage);
            },
        });
    }
}
