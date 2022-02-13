import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatosDomain } from '../domain/contatos-domain';
import { ContatosService } from '../service/contatos-service';

@Component({
  selector: 'contatos-create',
  templateUrl: './contatos-create.component.html',
  styleUrls: ['./contatos-create.component.css']
})
export class ContatosCreateComponent implements OnInit {

  contatos: ContatosDomain = {
    id: undefined!,
    nome: '',
    sobrenome: '',
    email: ''
  }

  constructor(private http : HttpClient, private service : ContatosService, private router : Router) { }

  ngOnInit(): void {
  }

  create() {
    this.service.create(this.contatos).subscribe( (resposta) => {
      this.router.navigate(['contatos'])
    })
  }

  cancel() {
    this.router.navigate(['contatos'])
  }
}
