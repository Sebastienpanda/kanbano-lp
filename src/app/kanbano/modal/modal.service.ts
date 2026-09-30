import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { environment } from "@environnement/environment";
import { Observable } from "rxjs";

@Service()
export class VerifyToken {
    private readonly http = inject(HttpClient);
    private readonly base_url = environment.base_url;

    verifyToken(token: string): Observable<{ message: string }> {
        return this.http.post<{ message: string }>(`${this.base_url}/verify-email/verify`, {
            token,
        });
    }
}
