import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(public authService: AuthService, private router: Router) {}

  get role(): string {
    return this.authService.getRole();
  }

  get nombre(): string {
    return this.authService.getNombre();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
