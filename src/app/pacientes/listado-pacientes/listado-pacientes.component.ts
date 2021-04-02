import { Component, OnInit } from '@angular/core';
import { Pacientes } from '../pacientes.interface';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.css']
})
export class ListadoPacientesComponent implements OnInit {

  listadoPacientes:Pacientes[]=[];

  constructor(private _service:PacientesService) { }

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes(){
    this._service.getPacientes().subscribe(res=>{
      this.listadoPacientes=res;
    })
  }

}
