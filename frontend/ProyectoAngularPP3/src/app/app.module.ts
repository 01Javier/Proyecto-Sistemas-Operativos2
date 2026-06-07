import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AlumnoService } from './service/alumno.service';
import { CatedraticoService } from './service/catedratico.service';
import { CursoService } from './service/curso.service';
import { UsuarioService } from './service/usuario.service';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConsultaUsuarioComponent,
    ConsultaCatedraticoComponent,
    ConsultaAlumnoComponent,
    ConsultaCursoComponent,
    EditCursoComponent,
    EditAlumnoComponent,
    EditCatedraticoComponent,
    EditUsuarioComponent,
    CrearUsuarioComponent,
    CrearAlumnoComponent,
    CrearCatedraticoComponent,
    CrearCursoComponent,
    InicioComponent,
    LoginComponent,
    MiCursoCatedraticoComponent,
    MiCursoAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlumnoService, CatedraticoService, CursoService, UsuarioService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
