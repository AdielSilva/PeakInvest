import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';6
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [

  { path: 'Consulta', component: ConsultaComponent },
  { path: 'Cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }