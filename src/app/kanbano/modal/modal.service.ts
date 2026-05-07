import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@environnement//environment.development";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class VerifyToken {
    private readonly http = inject(HttpClient);
    private readonly base_url = environment.base_url;

    verifyToken(token: string): Observable<{ message: string }> {
        return this.http.post<{ message: string }>(`${this.base_url}/verify-email/verify`, {
            token,
        });
    }
}
