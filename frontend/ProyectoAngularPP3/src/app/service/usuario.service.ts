import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entity/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
constructor(private http: HttpClient) {}
  Url = '/api';

  allUsers() {
    return this.http.get<User[]>(this.Url + '/users');
  }

  createUser(user: User) {
    return this.http.post<User>(this.Url + '/create_user', user);
  }

  searchUserId(id: Number | string) {
    return this.http.get<User>(this.Url + '/users_id/' + id);
  }

  editUser(id: Number | string, user: User) {
    return this.http.put<User>(this.Url + '/update_user/' + id, user);
  }

  deleteUser(user: User) {
    return this.http.delete(this.Url + '/delete_user/' + user.id, {
      responseType: 'text',
    });
  }
}
