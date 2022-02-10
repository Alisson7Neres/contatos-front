import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NumerosDomain } from '../../numeros/domain/numeros-domain';
import { NumerosService } from '../service/numeros-service';

@Component({
  selector: 'app-contatos-numeros',
  templateUrl: './contatos-numeros.component.html',
  styleUrls: ['./contatos-numeros.component.css']
})
export class ContatosNumerosComponent implements OnInit {

  numero: NumerosDomain = {
    id: undefined!,
    numero: ''
  }

  numeros: NumerosDomain[] = []
  displayedColumns: string[] =  ['numero', 'acoes'];

  contatos_join: string = '';

  constructor(private service : NumerosService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.contatos_join = this.route.snapshot.paramMap.get('contatos_join')!
    this.findAllByContatos();
  }

  findAllByContatos() {
    this.service.findAllByContatos(this.contatos_join).subscribe( (resposta) => {
      this.numeros = resposta
    })
  }

  create() {
    this.service.create(this.numero, this.contatos_join).subscribe( (resposta) => {
      this.router.navigate([`contatos/${this.contatos_join}/numeros`])
      window.location.reload();
    })
  }

}
