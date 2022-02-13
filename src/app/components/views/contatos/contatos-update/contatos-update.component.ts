import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatosDomain } from '../domain/contatos-domain';
import { ContatosService } from '../service/contatos-service';

@Component({
  selector: 'app-contatos-update',
  templateUrl: './contatos-update.component.html',
  styleUrls: ['./contatos-update.component.css']
})
export class ContatosUpdateComponent implements OnInit {

  contatos: ContatosDomain = {
    id: '',
    nome: '',
    sobrenome: '',
    email: ''
  };

  constructor(private service : ContatosService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.contatos.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  };

  update() {
    this.service.update(this.contatos).subscribe( (resposta) => {
      this.router.navigate(['contatos'])
    })
  };

  findById(): void {
    this.service.findById(this.contatos.id!).subscribe( resposta => {
      this.contatos.nome = resposta.nome
      this.contatos.sobrenome = resposta.sobrenome
      this.contatos.email = resposta.email
    })
  };

  cancel() {
    this.router.navigate(['contatos/'])
  }

}
