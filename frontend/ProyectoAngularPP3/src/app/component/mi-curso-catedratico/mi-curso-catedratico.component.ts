import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CursoService } from '../../service/curso.service';
import { Curso } from '../../entity/curso';

@Component({
  selector: 'app-mi-curso-catedratico',
  standalone: false,
  templateUrl: './mi-curso-catedratico.component.html',
  styleUrl: './mi-curso-catedratico.component.css'
})
export class MiCursoCatedraticoComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(
    private cursoService: CursoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.authService.getId();
    if (id) {
      this.cursoService.getCursosByCatedratico(id).subscribe((data) => {
        this.cursos = data;
      });
    }
  }

  selectEdit(curso: Curso): void {
    localStorage.setItem('id', curso.id.toString());
    this.router.navigate(['/editCurso']);
  }
}
