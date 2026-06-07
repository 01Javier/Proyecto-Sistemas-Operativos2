import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { CursoService } from '../../service/curso.service';
import { Curso } from '../../entity/curso';
import { Catedratico } from '../../entity/catedratico';
import { CatedraticoService } from '../../service/catedratico.service';
import { Alumno } from '../../entity/alumno';
import { AlumnoService } from '../../service/alumno.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-edit-curso',
  standalone: false,
  templateUrl: './edit-curso.component.html',
  styleUrl: './edit-curso.component.css',
})
export class EditCursoComponent implements OnInit {
  curso: Curso = new Curso();
  alumnos: Alumno[] = [];
  alumnosSeleccionados: Alumno[] = [];
  catedraticos: Catedratico[] = [];

  constructor(
    private cursoService: CursoService,
    private alumnoService: AlumnoService,
    private catedraticoService: CatedraticoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarCurso();
    this.obtenerAlumnos();
    this.obtenerCatedraticos();
  }

  cargarCurso() {
    const id = localStorage.getItem('id');
    if (id) {
      this.cursoService.searchCursoId(id).subscribe((data) => {
        this.curso = data;

        this.catedraticoService.allCatedraticos().subscribe((catedraticos) => {
          this.catedraticos = catedraticos;

          this.curso.catedratico =
            this.catedraticos.find((c) => c.id === data.catedratico?.id) ||
            data.catedratico;

          this.alumnoService.allAlumnos().subscribe((alumnos) => {
            this.alumnos = alumnos;

            this.alumnosSeleccionados = data.alumnos.map(
              (a) => this.alumnos.find((al) => al.id === a.id) || a
            );
          });
        });
      });
    }
  }

  obtenerAlumnos() {
    this.alumnoService.allAlumnos().subscribe((data) => {
      this.alumnos = data;
    });
  }

  obtenerCatedraticos() {
    this.catedraticoService.allCatedraticos().subscribe((data) => {
      this.catedraticos = data;
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
    alert('Debe ingresar un nombre para el curso.');
    return;
  }

  if (!this.curso.catedratico || !this.curso.catedratico.id) {
    alert('Debe seleccionar un catedrático.');
    return;
  }

  if (!this.alumnosSeleccionados || this.alumnosSeleccionados.length === 0) {
    alert('Debe agregar al menos un alumno al curso.');
    return;
  }

  this.curso.alumnos = this.alumnosSeleccionados;

  const id = localStorage.getItem('id');
  if (id) {
    this.cursoService.editCurso(id, this.curso).subscribe(() => {
      alert('Curso actualizado correctamente');
      this.navegar();
    });
  } else {
    alert('Error: no se pudo obtener el ID del curso.');
  }
}

  cancelar() {
    this.navegar();
  }

  private navegar(): void {
    if (this.authService.getRole() === 'CATEDRATICO') {
      this.router.navigate(['/mi-curso']);
    } else {
      this.router.navigate(['/cursos']);
    }
  }
}
