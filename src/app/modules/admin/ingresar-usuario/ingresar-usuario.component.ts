import { Component, OnInit, ViewChild, ViewEncapsulation ,Inject} from '@angular/core';
import { UsuarioService } from '../usuario.servicio';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { FuseAlertType } from '@fuse/components/alert';
import { fuseAnimations } from '@fuse/animations';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-ingresar-usuario',
  templateUrl: './ingresar-usuario.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class IngresarUsuarioComponent implements OnInit{
  
  alert: { type: FuseAlertType; message: string } = {
    type   : 'success',
    message: ''
  };

  signUpForm:UntypedFormGroup;
  showAlert:boolean =false;
  constructor( 
    private service: UsuarioService,
    private router: Router,
    private _fromBuilder:UntypedFormBuilder,
    public dialog: MatDialog,
  ){

  }
  ngOnInit(): void {
    this.signUpForm = this._fromBuilder.group({
        firstName:  ['', Validators.required],
        lastName:   ['', Validators.required],
        email:      ['', [Validators.required, Validators.email]],
        password:   ['', Validators.required],
        username:   ['', Validators.required],
      }
    );
  }
  
  
  proceedregister(): void{
    if (this.signUpForm.valid) {
      this.service.RegisterUser(this.signUpForm.value).subscribe( {
        next:(result : any)=>{
          this.alert = {
            type   : 'success',
            message: 'Registro exitoso'
          };
          //this.toastr.success('Please contact admin for enable access.','Registered successfully')
          this.router.navigate(['usuario/listUser'])
        },
        error: (result : any)=>{
          this.dialog.open(DialogDataExampleDialog,{
            data: result.error.errores.mensaje
          });
          this.alert = {
            type   : 'error',
            message: result.error.errores.mensaje
          };
          console.log (result.error.errores.mensaje)
        }
      }
    
      );
    } 
  }
}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IngresarUsuarioComponent) {}
}
