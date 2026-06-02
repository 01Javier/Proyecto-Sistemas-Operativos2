import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { User } from '../../entity/usuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  standalone: false,
  templateUrl: './edit-usuario.component.html',
  styleUrl: './edit-usuario.component.css'
})
export class EditUsuarioComponent implements OnInit{

  constructor(private service: UsuarioService, private router: Router) {}
    ngOnInit(): void {
      this.selectEdit();
    }

    Cancel() {
      this.router.navigate(['usuarios']);
    }

    user = new User();
    @ViewChild('myFocus') myFocus: any;

    ngAfterViewInit(): void {
      this.myFocus.nativeElement.focus();
    }

    selectEdit() {
      let id = localStorage.getItem('id');
      if (id) {
        this.service.searchUserId(id).subscribe((result) => {
          this.user = result;
        });
      }
    }

    editUser(user: User) {
    if (
      !user.nombre ||
      !user.apellido ||
      !user.email ||
      !user.telefono ||
      !user.password
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
      alert('Número de teléfono inválido. Debe tener al menos 8 dígitos.');
      return;
    }

    const id = localStorage.getItem('id');
    if (id) {
      this.service.editUser(id, user).subscribe((result) => {
        if (result != null) {
          this.user = result;
          alert('Usuario modificado correctamente.');
          this.router.navigate(['usuarios']);
        } else {
          alert('Error al modificar usuario. Verifique los datos.');
        }
      });
    }
  }

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
  }

}
