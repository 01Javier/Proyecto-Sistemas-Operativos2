import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { CatedraticoService } from '../../service/catedratico.service';
import { Catedratico } from '../../entity/catedratico';

@Component({
  selector: 'app-crear-catedratico',
  standalone: false,
  templateUrl: './crear-catedratico.component.html',
  styleUrl: './crear-catedratico.component.css'
})
export class CrearCatedraticoComponent implements OnInit {

  catedratico: Catedratico = new Catedratico();

    constructor(private service: CatedraticoService, private router: Router) {}
    ngOnInit(): void {}
    Cancel() {
      this.router.navigate(['catedraticos']);
    }

    Save(catedratico: Catedratico) {

  if (
    !catedratico.nombre ||
    !catedratico.apellido ||
    !catedratico.email ||
    !catedratico.password ||
    !catedratico.telefono ||
    catedratico.edad == null ||
    !catedratico.dpi
  ) {
    alert('Debe llenar todos los campos.');
    return;
  }

  const emailVal = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailVal.test(catedratico.email)) {
    alert('Correo electrónico inválido.');
    return;
  }

  const passwordVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,100}$/;
  if (!passwordVal.test(catedratico.password)) {
    alert('La contraseña debe tener entre 6 y 100 caracteres, con mayúsculas, minúsculas, números y caracteres especiales.');
    return;
  }

  const telefonoVal = /^[0-9]{8}$/;
  if (!telefonoVal.test(catedratico.telefono)) {
    alert('Número de teléfono inválido. Debe tener al menos 8 dígitos.');
    return;
  }

  if (catedratico.edad < 18 || catedratico.edad > 50) {
    alert('La edad debe estar entre 18 y 50 años.');
    return;
  }

  const dpiVal = /^[0-9]{13}$/;
  if (!dpiVal.test(catedratico.dpi)) {
    alert('El DPI debe tener exactamente 13 dígitos.');
    return;
  }

  this.service.createCatedratico(catedratico).subscribe((result) => {
    if (result != null) {
      alert('Catedrático ingresado correctamente.');
      this.router.navigate(['catedraticos']);
    } else {
      alert('El catedrático ya existe. Verifique los datos.');
    }
  });
}

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
  }

}
