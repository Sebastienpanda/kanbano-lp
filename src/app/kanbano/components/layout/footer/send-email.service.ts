import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@environnement//environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class SendEmailService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = environment.base_url;

    sendEmail(email: string): Observable<{ message: string }> {
        return this.http.post<{ message: string }>(`${this.baseUrl}/verify-email/send`, { email });
    }

    resendEmail(email: string): Observable<{ message: string }> {
        return this.http.post<{ message: string }>(`${this.baseUrl}/verify-email/resend-token`, { email });
    }
}
