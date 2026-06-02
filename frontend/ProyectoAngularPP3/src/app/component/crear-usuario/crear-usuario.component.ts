import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { User } from '../../entity/usuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  standalone: false,
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent implements OnInit{

   user: User = new User();

    constructor(private service: UsuarioService, private router: Router) {}
    ngOnInit(): void {}
    Cancel() {
      this.router.navigate(['usuarios']);
    }

    Save(user: User) {
  if (
    !user.nombre ||
    !user.apellido ||
    !user.email ||
    !user.password ||
    !user.telefono
  ) {
    alert('Debe llenar todos los campos.');
    return;
  }

  const emailVal = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailVal.test(user.email)) {
    alert('Correo electrónico inválido.');
    return;
  }

  const passwordVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,100}$/;
  if (!passwordVal.test(user.password)) {
    alert('La contraseña debe tener entre 6 y 100 caracteres, con mayúsculas, minúsculas, números y caracteres especiales.');
    return;
  }

  const telefonoVal = /^[0-9]{8}$/;
  if (!telefonoVal.test(user.telefono)) {
    alert('Número de teléfono inválido. Debe tener exactamente 8 dígitos.');
    return;
  }

  this.service.createUser(user).subscribe((result) => {
    if (result != null) {
      alert('Usuario ingresado');
      this.router.navigate(['usuarios']);
    } else {
      alert('Usuario ya existe, verifique');
    }
  });
}

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
  }

}
