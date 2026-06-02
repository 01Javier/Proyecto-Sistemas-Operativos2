import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { User } from '../../entity/usuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-consulta-usuario',
  standalone: false,
  templateUrl: './consulta-usuario.component.html',
  styleUrl: './consulta-usuario.component.css',
})
export class ConsultaUsuarioComponent implements OnInit {
  users!: User[];

  constructor(private service: UsuarioService, private router: Router) {}
  ngOnInit(): void {
    this.service.allUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(user: User) {
    var valida = confirm('Está seguro que desea eliminar el registro?');
    if (valida == true) {
      this.service.deleteUser(user).subscribe({
        next: (result) => {
          this.users = this.users.filter((x) => x !== user);
          alert(result);
        },
        error: () => {
          alert('Ha ocurrido un error al eliminar el usuario.');
        },
      });
    }
  }

  selectEdit(user: User): void {
    localStorage.setItem('id', user.id.toString().valueOf());
    this.router.navigate(['editUsuario']);
  }
}
