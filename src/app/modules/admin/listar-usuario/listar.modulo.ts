import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatSelectModule} from "@angular/material/select"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatMenuModule} from "@angular/material/menu"
import {MatIconModule} from "@angular/material/icon"
import {MatToolbarModule} from "@angular/material/toolbar"
import { ListarUsuarioComponent } from "./listar-usuario.component";
import { Route, RouterModule } from "@angular/router";
const listaUsuarioRoutes: Route[] = [
    {
        path     : '',
        component: ListarUsuarioComponent,
        
        
    }
];
@NgModule({
    declarations: [
        ListarUsuarioComponent
    ],
    imports:[
        RouterModule.forChild(listaUsuarioRoutes),
        MatInputModule,
        MatCardModule,
        MatRadioModule,
        MatButtonModule,
        MatTableModule,MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        
    ]
})
export class ListarUserModule { }