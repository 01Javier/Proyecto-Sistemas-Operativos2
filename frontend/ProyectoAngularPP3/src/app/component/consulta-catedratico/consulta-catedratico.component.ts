import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { CatedraticoService } from '../../service/catedratico.service';
import { Catedratico } from '../../entity/catedratico';

@Component({
  selector: 'app-consulta-catedratico',
  standalone: false,
  templateUrl: './consulta-catedratico.component.html',
  styleUrl: './consulta-catedratico.component.css'
})
export class ConsultaCatedraticoComponent implements OnInit{

catedraticos!:Catedratico[];

  constructor (private service:CatedraticoService, private router:Router) {}
  ngOnInit(): void {
    this.service.allCatedraticos().subscribe(data=>{
      this.catedraticos=data;
    })
  }

  deleteCatedratico(catedratico: Catedratico) {

    var valida=confirm("Está seguro que desea eliminar el registro?")
    if (valida==true)
    {

          this.service.deleteCatedratico(catedratico)
          .subscribe({
            next: (result) => {
              this.catedraticos = this.catedraticos.filter(x => x !== catedratico);
              alert(result);
            },
            error: () => {
              alert('Ha ocurrido un error al eliminar el catedratico.\nVerifique que no existan libros asociados');
            }
          });
        }


    }

  selectEdit(catedratico:Catedratico): void{
    localStorage.setItem("id", catedratico.id.toString().valueOf());
    this.router.navigate(["editCatedratico"]);
  }


}
