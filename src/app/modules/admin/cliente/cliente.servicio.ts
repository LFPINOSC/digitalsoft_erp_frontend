import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{tap, mapTo, catchError} from 'rxjs/operators';
import{from, of} from 'rxjs';
import { Cliente } from './cliente.modelo';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  headers = new Headers();
  
  constructor(private http:HttpClient) { 

  }
  
  apiurl='https://api.digitalsoftec.net/api/Cliente';

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
    
    return this.http.get<Cliente[]>(this.apiurl+'/list',{headers});
  }
  
  
}