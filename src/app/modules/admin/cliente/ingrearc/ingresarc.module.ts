import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'app/shared/shared.module';
import { IngrearcComponent } from './ingrearc.component';

const ingresarClienteRoutes: Route[] = [
    {
        path     : '',
        component: IngrearcComponent,
        
        
    }
];
@NgModule({
    declarations: [
        IngrearcComponent
    ],
    imports:[
        RouterModule.forChild(ingresarClienteRoutes),
        MatInputModule,
        MatCardModule,
        MatRadioModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        ToastrModule,
        SharedModule,
        
    ],
})
export class IngresarUserModule {
    
 }