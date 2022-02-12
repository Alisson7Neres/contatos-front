import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ContatosDomain } from '../domain/contatos-domain';
import { ContatosService } from '../service/contatos-service';

@Component({
  selector: 'contatos-read',
  templateUrl: './contatos-read.component.html',
  styleUrls: ['./contatos-read.component.css']
})
export class ContatosReadComponent implements OnInit {

    contatos: ContatosDomain[] = []

    displayedColumns: string[]  = ['nome', 'sobrenome', 'email',  'numeros', 'acoes'];
  constructor(private service : ContatosService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe( data =>  {
      this.contatos = data;
      console.log(data)
    })
  }

}
