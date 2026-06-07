import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../entity/usuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  user: User = new User();
  error = '';
  loading = false;
  showPassword = false;

  constructor(private service: UsuarioService, private router: Router) {}

  registrar(): void {
    this.error = '';

    if (!this.user.nombre || !this.user.apellido || !this.user.email || !this.user.password || !this.user.telefono) {
      this.error = 'Todos los campos son obligatorios.';
      return;
    }

    const emailVal = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailVal.test(this.user.email)) {
      this.error = 'Correo electrónico inválido.';
      return;
    }

    const passwordVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,100}$/;
    if (!passwordVal.test(this.user.password)) {
      this.error = 'La contraseña debe tener al menos 6 caracteres, con mayúsculas, minúsculas, número y un carácter especial.';
      return;
    }

    const telefonoVal = /^[0-9]{8}$/;
    if (!telefonoVal.test(this.user.telefono)) {
      this.error = 'El teléfono debe tener exactamente 8 dígitos.';
      return;
    }

    this.loading = true;
    this.user.role = 'ADMIN';

    this.service.createUser(this.user).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error: () => {
        this.loading = false;
        this.error = 'El correo ya está registrado. Intenta con otro.';
      }
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
