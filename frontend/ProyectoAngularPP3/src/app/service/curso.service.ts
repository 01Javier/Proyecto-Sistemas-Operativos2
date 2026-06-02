import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../entity/curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor(private http: HttpClient) {}
  Url = '/api';

  allCursos() {
    return this.http.get<Curso[]>(this.Url + '/curso');
  }

  createCurso(curso: Curso) {
    return this.http.post<Curso>(this.Url + '/create_curso', curso);
  }

  searchCursoId(id: Number | string) {
    return this.http.get<Curso>(this.Url + '/curso_id/' + id);
  }

  editCurso(id: Number | string, curso: Curso) {
    return this.http.put<Curso>(this.Url + '/update_curso/' + id, curso);
  }

  deleteCurso(curso: Curso) {
    return this.http.delete(this.Url + '/delete_curso/' + curso.id, {
      responseType: 'text',
    });
  }
}
