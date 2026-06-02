import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { CursoService } from '../../service/curso.service';
import { Curso } from '../../entity/curso';
import { Catedratico } from '../../entity/catedratico';
import { CatedraticoService } from '../../service/catedratico.service';
import { Alumno } from '../../entity/alumno';
import { AlumnoService } from '../../service/alumno.service';

@Component({
  selector: 'app-crear-curso',
  standalone: false,
  templateUrl: './crear-curso.component.html',
  styleUrl: './crear-curso.component.css',
})
export class CrearCursoComponent implements OnInit {
  curso: Curso = new Curso();
  alumnosSeleccionados: Alumno[] = [];
  catedraticos: Catedratico[] = [];
  alumnos: Alumno[] = [];

  constructor(
    private cursoService: CursoService,
    private catedraticoService: CatedraticoService,
    private alumnoService: AlumnoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.catedraticoService.allCatedraticos().subscribe((data) => {
      this.catedraticos = data;
    });

    this.alumnoService.allAlumnos().subscribe((data) => {
      this.alumnos = data;
    });
  }

  agregarAlumno() {
    this.alumnosSeleccionados.push(new Alumno());
  }

  eliminarAlumno(index: number) {
    this.alumnosSeleccionados.splice(index, 1);
  }

  guardarCurso() {
  if (!this.curso.name || this.curso.name.trim().length === 0) {
    alert('Debe ingresar un nombre de curso.');
    return;
  }

  if (!this.curso.catedratico) {
    alert('Debe seleccionar un catedrático.');
    return;
  }

  if (!this.alumnosSeleccionados || this.alumnosSeleccionados.length === 0) {
    alert('Debe agregar al menos un alumno al curso.');
    return;
  }

  this.curso.alumnos = this.alumnosSeleccionados;
  this.cursoService.createCurso(this.curso).subscribe((result) => {
    alert('Curso creado exitosamente');
    this.router.navigate(['cursos']);
  });
}


  cancelar() {
    this.router.navigate(['cursos']);
  }
}
