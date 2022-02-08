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

  numeros: NumerosDomain[] = []
  displayedColumns: string[] =  ['numero', 'acoes'];

  contatos_join: string = '';

  constructor(private service : NumerosService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.contatos_join = this.route.snapshot.paramMap.get('contatos_join')!
    this.findAllByContatos();
  }

  findAllByContatos() {
    this.service.findAllByContatos(this.contatos_join).subscribe( (resposta) => {
      this.numeros = resposta
    })
  }

}
