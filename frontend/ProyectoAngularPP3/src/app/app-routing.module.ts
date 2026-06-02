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

const routes: Routes = [

    {
      path: 'menu', component: MenuComponent
    },

    {
      path: "alumnos", component: ConsultaAlumnoComponent
    },

    {
      path: 'catedraticos', component: ConsultaCatedraticoComponent
    },

    {
      path: 'usuarios', component: ConsultaUsuarioComponent
    },

    {
      path: 'cursos', component: ConsultaCursoComponent
    },

    {
      path: 'crearAlumno', component: CrearAlumnoComponent
    },

    {
      path: 'crearCatedratico', component: CrearCatedraticoComponent
    },

    {
      path: 'crearCurso', component: CrearCursoComponent
    },

    {
      path: 'crearUsuario', component: CrearUsuarioComponent
    },

    {
      path: 'editAlumno', component: EditAlumnoComponent
    },

    {
      path: 'editCatedratico', component: EditCatedraticoComponent
    },

    {
      path: 'editCurso', component: EditCursoComponent
    },

    {
      path: 'editUsuario', component: EditUsuarioComponent
    },

    {
      path: "inicio", component: InicioComponent
    },

    {
      path: "" , redirectTo: "inicio", pathMatch : "full"
    },

    {
      path:"**" , redirectTo: "inicio", pathMatch : "full"
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
