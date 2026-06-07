import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { ConsultaUsuarioComponent } from './component/consulta-usuario/consulta-usuario.component';
import { ConsultaCatedraticoComponent } from './component/consulta-catedratico/consulta-catedratico.component';
import { ConsultaAlumnoComponent } from './component/consulta-alumno/consulta-alumno.component';
import { ConsultaCursoComponent } from './component/consulta-curso/consulta-curso.component';
import { EditCursoComponent } from './component/edit-curso/edit-curso.component';
import { EditAlumnoComponent } from './component/edit-alumno/edit-alumno.component';
import { EditCatedraticoComponent } from './component/edit-catedratico/edit-catedratico.component';
import { EditUsuarioComponent } from './component/edit-usuario/edit-usuario.component';
import { CrearUsuarioComponent } from './component/crear-usuario/crear-usuario.component';
import { CrearAlumnoComponent } from './component/crear-alumno/crear-alumno.component';
import { CrearCatedraticoComponent } from './component/crear-catedratico/crear-catedratico.component';
import { CrearCursoComponent } from './component/crear-curso/crear-curso.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { LoginComponent } from './component/login/login.component';
import { MiCursoCatedraticoComponent } from './component/mi-curso-catedratico/mi-curso-catedratico.component';
import { MiCursoAlumnoComponent } from './component/mi-curso-alumno/mi-curso-alumno.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'menu', component: MenuComponent, canActivate: [authGuard] },

  { path: 'inicio', component: InicioComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },

  { path: 'alumnos', component: ConsultaAlumnoComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },
  { path: 'catedraticos', component: ConsultaCatedraticoComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },
  { path: 'usuarios', component: ConsultaUsuarioComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },
  { path: 'cursos', component: ConsultaCursoComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },

  { path: 'crearAlumno', component: CrearAlumnoComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },
  { path: 'crearCatedratico', component: CrearCatedraticoComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },
  { path: 'crearCurso', component: CrearCursoComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },
  { path: 'crearUsuario', component: CrearUsuarioComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },

  { path: 'editAlumno', component: EditAlumnoComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },
  { path: 'editCatedratico', component: EditCatedraticoComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },
  { path: 'editCurso', component: EditCursoComponent, canActivate: [authGuard], data: { roles: ['ADMIN', 'CATEDRATICO'] } },
  { path: 'editUsuario', component: EditUsuarioComponent, canActivate: [authGuard], data: { roles: ['ADMIN'] } },

  { path: 'mi-curso', component: MiCursoCatedraticoComponent, canActivate: [authGuard], data: { roles: ['CATEDRATICO'] } },
  { path: 'mi-curso-alumno', component: MiCursoAlumnoComponent, canActivate: [authGuard], data: { roles: ['ALUMNO'] } },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
