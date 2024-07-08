import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8080/authentication";

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  login(username: string, password: string) {  
    return this.httpClient
      .post<LoginResponse>(this.apiUrl + "/login", { username, password }).pipe(
        tap((value) => {          
          sessionStorage.setItem("auth-token", value.tokenJWT)
          sessionStorage.setItem("user-role", value.role)
        }),
        catchError(this.handleLoginError),
      );
  }

  private handleLoginError(error: HttpErrorResponse) {
    const message: string = error.status === 403
      ? "Dados inválidos! Tente novamente"
      : "Erro inesperado! Tente novamente mais tarde";
    
    return throwError(() => new Error(message));
  }
}
