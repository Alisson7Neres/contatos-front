import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NumerosDomain } from '../../numeros/domain/numeros-domain';
import { ContatosDomain } from '../domain/contatos-domain';
import { ContatosService } from '../service/contatos-service';
import { NumerosService } from '../service/numeros-service';

@Component({
  selector: 'app-contatos-numeros-update',
  templateUrl: './contatos-numeros-update.component.html',
  styleUrls: ['./contatos-numeros-update.component.css']
})
export class ContatosNumerosUpdateComponent implements OnInit {

  contato: ContatosDomain = {
    id: '',
    nome: '',
    sobrenome: '',
    email: ''
  };

  numero: NumerosDomain = {
    id: '',
    numero: ''
  };

  contatos: ContatosDomain[] = []
  numeros: NumerosDomain[] = []

  contatos_join: string = '';

  constructor(private service : NumerosService, private serviceContatos : ContatosService,
     private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.contatos_join = this.route.snapshot.paramMap.get('contatos_join')!
    this.numero.id = this.route.snapshot.paramMap.get('id')!
    this.findByIdContatos();
    this.findAllByContatos();
  }

  findAllByContatos() {
    this.service.findAllByContatos(this.contatos_join).subscribe( (resposta) => {
      this.numeros = resposta;
      console.log(resposta)
    })
  }

  findByIdContatos() {
    this.serviceContatos.findById(this.contatos_join).subscribe( (resposta) => {
      this.contato = resposta;
    })
  }

  update() {
    this.service.update(this.numero).subscribe( () => {
      setTimeout( () => {
        this.router.navigate([`contatos/${this.contatos_join}/numeros`])
      }, 3000)
    })
  }

  cancel() {
    this.router.navigate([`contatos/`])
  }
}
