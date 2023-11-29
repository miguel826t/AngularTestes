import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { SidebarComponent } from './modules/components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'login', component: PacienteListComponent
  },
  {
    path : '', component: SidebarComponent,
    children: [
      {path: 'pacientes', component:PacienteListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
