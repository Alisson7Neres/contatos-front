import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosCreateComponent } from './components/views/contatos/contatos-create/contatos-create.component';
import { ContatosNumerosComponent } from './components/views/contatos/contatos-numeros/contatos-numeros.component';
import { ContatosReadComponent } from './components/views/contatos/contatos-read/contatos-read.component';
import { HomeComponent } from './components/views/contatos/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contatos', component: ContatosReadComponent},
  {path : 'contatos/:contatos_join/numeros', component: ContatosNumerosComponent},
  {path: 'create', component: ContatosCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
