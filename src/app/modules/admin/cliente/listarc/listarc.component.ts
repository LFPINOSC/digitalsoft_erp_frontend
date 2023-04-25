import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../cliente.modelo';
import { ClienteService } from '../cliente.servicio';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listarc',
  templateUrl: './listarc.component.html'
})
export class ListarcComponent implements OnInit{

  users1?: Cliente[];
  usuario?:Cliente;
  columnas: string[] = ['razonSocial','nombre','apellido', 'identidad', 'fechaNaciento', 'genero','estadoCivil', 'editar'];
  dataSource:any;
  constructor(private clienteService: ClienteService) {
    
  }
  @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator;
  @ViewChild(MatTable) tabla1!: MatTable<Cliente>;
  ngOnInit() {
      this.clienteService.getall()
          
          .subscribe(res => {
            console.log(res)
            this.dataSource=new MatTableDataSource<Cliente>(res),
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