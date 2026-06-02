import { Component } from '@angular/core';
import { Alumno } from '../../entity/alumno';
import { AlumnoService } from '../../service/alumno.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-alumno',
  standalone: false,
  templateUrl: './crear-alumno.component.html',
  styleUrl: './crear-alumno.component.css',
})
export class CrearAlumnoComponent implements OnInit {
  alumno: Alumno = new Alumno();

  constructor(private service: AlumnoService, private router: Router) {}
  ngOnInit(): void {}
  Cancel() {
    this.router.navigate(['alumnos']);
  }

  Save(alumno: Alumno) {

  if (
    !alumno.nombre ||
    !alumno.apellido ||
    !alumno.email ||
    !alumno.password ||
    !alumno.telefono ||
    !alumno.grado ||
    !alumno.seccion ||
    alumno.edad == null ||
    !alumno.cui
  ) {
    alert('Debe llenar todos los campos.');
    return;
  }

  const emailVal = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailVal.test(alumno.email)) {
    alert('Correo electrónico inválido.');
    return;
  }

  const passwordVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,100}$/;
  if (!passwordVal.test(alumno.password)) {
    alert('La contraseña debe tener entre 6 y 100 caracteres, con mayúsculas, minúsculas, números y caracteres especiales.');
    return;
  }

  const telefonoVal = /^[0-9]{8}$/;
  if (!telefonoVal.test(alumno.telefono)) {
    alert('Número de teléfono inválido. Debe tener al menos 8 dígitos.');
    return;
  }

  if (alumno.grado.trim().length === 0) {
    alert('Debe ingresar un grado válido.');
    return;
  }

  const seccionVal = /^[A-Z\s]{1}$/;
  if (!seccionVal.test(alumno.seccion)) {
    alert('La sección debe ser una sola letra mayúscula.');
    return;
  }

  if (alumno.edad < 6 || alumno.edad > 17) {
    alert('La edad debe estar entre 6 y 17 años.');
    return;
  }

  const cuiVal = /^[0-9]{13}$/;
  if (!cuiVal.test(alumno.cui)) {
    alert('El CUI debe tener exactamente 13 dígitos.');
    return;
  }

  this.service.createAlumno(alumno).subscribe((result) => {
    if (result != null) {
      alert('Alumno ingresado correctamente.');
      this.router.navigate(['alumnos']);
    } else {
      alert('El alumno ya existe. Verifique los datos.');
    }
  });
}

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
  }


}
