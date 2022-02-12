import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatosDomain } from '../domain/contatos-domain';
import { ContatosService } from '../service/contatos-service';

@Component({
  selector: 'app-contatos-delete',
  templateUrl: './contatos-delete.component.html',
  styleUrls: ['./contatos-delete.component.css']
})
export class ContatosDeleteComponent implements OnInit {


  contatos: ContatosDomain = {
    id: '',
    nome: '',
    sobrenome: '',
    email: ''
  }

  constructor(private service: ContatosService, private route: ActivatedRoute, private router : Router) { }
  
  ngOnInit(): void {
    this.contatos.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById() {
    this.service.findById(this.contatos.id).subscribe( (resposta) => {
      this.contatos.nome = resposta.nome
      this.contatos.sobrenome = resposta.sobrenome
      this.contatos.email = resposta.email
    })
  }
  
  delete() {
    this.service.delete(this.contatos.id).subscribe( () => {
      this.router.navigate(['/contatos'])
    })
  }
}
