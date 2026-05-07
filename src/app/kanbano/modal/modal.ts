import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject, PLATFORM_ID, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SendEmailService } from "@components/layout/footer/send-email.service";
import { FormError } from "@components/utilities/form-error";
import { VerifyToken } from "@kanbano/modal/modal.service";
import { filter } from "rxjs";

interface ResendForm {
    email: FormControl<string>;
}

@Component({
    selector: "kanbano-lp-modal",
    imports: [FormsModule, ReactiveFormsModule, FormError],
    templateUrl: "./modal.html",
    styleUrl: "./modal.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal {
    protected readonly token = signal<string | null>(null);
    protected readonly isOpen = signal<boolean>(false);
    protected readonly isLoading = signal<boolean>(false);
    protected readonly isResending = signal<boolean>(false);
    protected readonly message = signal<string>("");
    protected readonly verificationStatus = signal<"success" | "error" | "info" | null>(null);

    private readonly document = inject(DOCUMENT);
    private readonly destroyRef = inject(DestroyRef);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly sendEmailService = inject(SendEmailService);
    protected readonly verifyToken = inject(VerifyToken);
    protected readonly router = inject(Router);
    protected readonly route = inject(ActivatedRoute);

    protected readonly resendForm = new FormGroup<ResendForm>({
        email: new FormControl("", {
            validators: [Validators.required, Validators.email],
            nonNullable: true,
        }),
    });

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
    }

    open(): void {
        this.isOpen.set(true);
    }

    close(): void {
        this.isOpen.set(false);
        void this.router.navigate([], {
            queryParams: { token: null },
            queryParamsHandling: "merge",
            replaceUrl: true,
        });
    }

    onResend(): void {
        if (this.resendForm.invalid) return;

        const { email } = this.resendForm.getRawValue();
        this.isResending.set(true);

        this.sendEmailService.resendEmail(email).subscribe({
            next: () => {
                this.isResending.set(false);
                this.verificationStatus.set("info");
            },
            error: (error) => {
                this.isResending.set(false);
                const errorMessage = error.error?.message || "Une erreur s'est produite, veuillez réessayer";
                this.message.set(errorMessage);
            },
        });
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
