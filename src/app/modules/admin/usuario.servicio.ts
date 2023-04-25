import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{tap, mapTo, catchError} from 'rxjs/operators';
import{from, of} from 'rxjs';
import { User } from './user.modelo';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  headers = new Headers();
  
  constructor(private http:HttpClient) { 

  }
  
  apiurl='https://api.digitalsoftec.net/api/user';

  set accessToken(token: string)
  {
      localStorage.setItem('accessToken', token);
  }

  get accessToken(): string
  {
      return localStorage.getItem('accessToken') ?? '';
  }
  getall() {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'origin',
      'Authorization':'Bearer '+this.accessToken
    });
    
    return this.http.get<User[]>(this.apiurl+'/list',{headers});
  }
  RegisterUser(inputdata:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'origin',
      'Authorization':'Bearer '+this.accessToken
    }); 
    const body=JSON.stringify(inputdata);
   
    console.log(body)
    return this.http.post(this.apiurl+'/create', body,{headers})
  }
}