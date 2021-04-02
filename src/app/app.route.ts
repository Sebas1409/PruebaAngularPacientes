import { Routes } from "@angular/router";
import { ListadoPacientesComponent } from "./pacientes/listado-pacientes/listado-pacientes.component";
import { RegistroPacientesComponent } from "./pacientes/registro-pacientes/registro-pacientes.component";

export const route:Routes=[
  { path:'', component:ListadoPacientesComponent},
  { path:'pacientes/listado', component:ListadoPacientesComponent},
  { path:'pacientes/registro', component:RegistroPacientesComponent}
]
