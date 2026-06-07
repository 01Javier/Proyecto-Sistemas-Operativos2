import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { CursoService } from '../../service/curso.service';
import { Curso } from '../../entity/curso';

@Component({
  selector: 'app-mi-curso-alumno',
  standalone: false,
  templateUrl: './mi-curso-alumno.component.html',
  styleUrl: './mi-curso-alumno.component.css'
})
export class MiCursoAlumnoComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(
    private cursoService: CursoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.authService.getId();
    if (id) {
      this.cursoService.getCursosByAlumno(id).subscribe((data) => {
        this.cursos = data;
      });
    }
  }
}
