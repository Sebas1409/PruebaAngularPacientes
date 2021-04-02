import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { PacientesService } from './pacientes.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ListadoPacientesComponent, RegistroPacientesComponent],
  imports: [
    CommonModule,HttpClientModule
  ],
  providers:[PacientesService]
})
export class PacientesModule { }
