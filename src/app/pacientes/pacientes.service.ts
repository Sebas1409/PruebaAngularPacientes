import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pacientes } from './pacientes.interface';



@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private url:string="https://apipacientes.adersonjaraweb.com/api/pacientes";

  constructor(private http:HttpClient) {

   }

   getPacientes() : Observable<Pacientes[]>{
     return this.http.get<Pacientes[]>(this.url);
   }
}
