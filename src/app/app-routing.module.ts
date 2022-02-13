import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosCreateComponent } from './components/views/contatos/contatos-create/contatos-create.component';
import { ContatosDeleteComponent } from './components/views/contatos/contatos-delete/contatos-delete.component';
import { ContatosNumerosDeleteComponent } from './components/views/contatos/contatos-numeros-delete/contatos-numeros-delete.component';
import { ContatosNumerosUpdateComponent } from './components/views/contatos/contatos-numeros-update/contatos-numeros-update.component';
import { ContatosNumerosComponent } from './components/views/contatos/contatos-numeros/contatos-numeros.component';
import { ContatosReadComponent } from './components/views/contatos/contatos-read/contatos-read.component';
import { ContatosUpdateComponent } from './components/views/contatos/contatos-update/contatos-update.component';
import { HomeComponent } from './components/views/contatos/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contatos', component: ContatosReadComponent},
  {path : 'contatos/:contatos_join/numeros', component: ContatosNumerosComponent},
  {path: 'create', component: ContatosCreateComponent},
  {path: 'contatos/update/:id', component: ContatosUpdateComponent},
  {path: 'contatos/delete/:id', component: ContatosDeleteComponent},
  {path: 'contatos/:contatos_join/numeros/:id' , component: ContatosNumerosUpdateComponent},
  {path: 'contatos/:contatos_join/numeros/delete/:id' , component: ContatosNumerosDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
