import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { CursoService } from '../../service/curso.service';
import { Curso } from '../../entity/curso';

@Component({
  selector: 'app-consulta-curso',
  standalone: false,
  templateUrl: './consulta-curso.component.html',
  styleUrl: './consulta-curso.component.css'
})
export class ConsultaCursoComponent implements OnInit{

  cursos!: Curso[];

    constructor(private service: CursoService, private router: Router) {}
    ngOnInit(): void {
      this.service.allCursos().subscribe((data) => {
        this.cursos = data;
      });
    }

    deleteCurso(curso: Curso) {
      var valida = confirm('Está seguro que desea eliminar el registro?');
      if (valida == true) {
        this.service.deleteCurso(curso).subscribe({
          next: (result) => {
            this.cursos = this.cursos.filter((x) => x !== curso);
            alert(result);
          },
          error: () => {
            alert(
              'Ha ocurrido un error al eliminar el curso.\nVerifique que no existan cursos asociados'
            );
          },
        });
      }
    }

    selectEdit(curso: Curso): void {
      localStorage.setItem('id', curso.id.toString().valueOf());
      this.router.navigate(['editCurso']);
    }

}
