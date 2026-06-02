import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../entity/alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  constructor(private http: HttpClient) {}
  Url = '/api';

  allAlumnos() {
    return this.http.get<Alumno[]>(this.Url + '/alumnos');
  }

  createAlumno(alumno: Alumno) {
    return this.http.post<Alumno>(this.Url + '/create_alumno', alumno);
  }

  searchAlumnoId(id: Number | string) {
    return this.http.get<Alumno>(this.Url + '/alumnos_id/' + id);
  }

  editAlumno(id: Number | string, alumno: Alumno) {
    return this.http.put<Alumno>(this.Url + '/update_alumno/' + id, alumno);
  }

  deleteAlumno(alumno: Alumno) {
    return this.http.delete(this.Url + '/delete_alumno/' + alumno.id, {
      responseType: 'text',
    });
  }
}
