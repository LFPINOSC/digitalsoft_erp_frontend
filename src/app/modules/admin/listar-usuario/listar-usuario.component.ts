import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'lodash';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UsuarioService } from '../usuario.servicio';
import { User } from '../user.modelo';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
})

export class ListarUsuarioComponent  implements OnInit{

    users1?: User[];
    usuario?:User;
    columnas: string[] = ['userName','email', 'firstName', 'lastName', 'editar'];
    dataSource:any;
    constructor(private usuarioService: UsuarioService) {
      
    }
    @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator;
    @ViewChild(MatTable) tabla1!: MatTable<User>;
    ngOnInit() {
        this.usuarioService.getall()
            
            .subscribe(res => {
              console.log(res)
              this.dataSource=new MatTableDataSource<User>(res),
              this.dataSource.paginator =this.paginator
            });   
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    editar(cod: number) {
      if (confirm("Realmente quiere editarlo?")) {
        this.usuario=this.users1![cod];
        console.log(this.usuario)
      }
    }
   
}

