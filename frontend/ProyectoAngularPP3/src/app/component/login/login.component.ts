import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  error = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.logout();
  }

  onLogin(): void {
    this.error = '';
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe({
      next: (data) => {
        this.authService.saveSession(data);
        this.loading = false;
        if (data.role === 'CATEDRATICO') this.router.navigate(['/mi-curso']);
        else if (data.role === 'ALUMNO') this.router.navigate(['/mi-curso-alumno']);
        else this.router.navigate(['/inicio']);
      },
      error: () => {
        this.loading = false;
        this.error = 'Credenciales incorrectas. Verifica tu correo y contraseña.';
      }
    });
  }
}
