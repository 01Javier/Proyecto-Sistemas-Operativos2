import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../entity/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly SESSION_KEY = 'auth_user';
  private readonly API = '/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API}/login`, { email, password });
  }

  saveSession(data: LoginResponse): void {
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(data));
  }

  getSession(): LoginResponse | null {
    const raw = sessionStorage.getItem(this.SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getSession();
  }

  getRole(): string {
    return this.getSession()?.role ?? '';
  }

  getId(): number | null {
    return this.getSession()?.id ?? null;
  }

  getNombre(): string {
    const s = this.getSession();
    return s ? `${s.nombre} ${s.apellido}` : '';
  }

  logout(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
  }
}
