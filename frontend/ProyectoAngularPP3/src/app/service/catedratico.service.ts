import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catedratico } from '../entity/catedratico';

@Injectable({
  providedIn: 'root',
})
export class CatedraticoService {
  constructor(private http: HttpClient) {}

  Url = '/api';

  allCatedraticos() {
    return this.http.get<Catedratico[]>(this.Url + '/catedraticos');
  }

  createCatedratico(catedratico: Catedratico) {
    return this.http.post<Catedratico>(
      this.Url + '/create_catedratico',
      catedratico
    );
  }

  searchCatedraticoId(id: Number | string) {
    return this.http.get<Catedratico>(this.Url + '/catedraticos_id/' + id);
  }

  editCatedratico(id: Number | string, catedratico: Catedratico) {
    return this.http.put<Catedratico>(
      this.Url + '/update_catedratico/' + id,
      catedratico
    );
  }

  deleteCatedratico(catedratico: Catedratico) {
    return this.http.delete(
      this.Url + '/delete_catedratico/' + catedratico.id,
      {
        responseType: 'text',
      }
    );
  }
}
