import { Component } from '@angular/core';
import { Alumno } from '../../entity/alumno';
import { AlumnoService } from '../../service/alumno.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-alumno',
  standalone: false,
  templateUrl: './consulta-alumno.component.html',
  styleUrl: './consulta-alumno.component.css',
})
export class ConsultaAlumnoComponent implements OnInit {
  alumnos!: Alumno[];

  constructor(private service: AlumnoService, private router: Router) {}
  ngOnInit(): void {
    this.service.allAlumnos().subscribe((data) => {
      this.alumnos = data;
    });
  }

  deleteAlumno(alumno: Alumno) {
    var valida = confirm('Está seguro que desea eliminar el registro?');
    if (valida == true) {
      this.service.deleteAlumno(alumno).subscribe({
        next: (result) => {
          this.alumnos = this.alumnos.filter((x) => x !== alumno);
          alert(result);
        },
        error: () => {
          alert(
            'Ha ocurrido un error al eliminar el alumno.\nVerifique que no existan cursos asociados'
          );
        },
      });
    }
  }

  selectEdit(alumno: Alumno): void {
    localStorage.setItem('id', alumno.id.toString().valueOf());
    this.router.navigate(['editAlumno']);
  }
}
