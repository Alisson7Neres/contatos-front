import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NumerosDomain } from '../../numeros/domain/numeros-domain';
import { NumerosService } from '../service/numeros-service';

@Component({
  selector: 'app-contatos-numeros-delete',
  templateUrl: './contatos-numeros-delete.component.html',
  styleUrls: ['./contatos-numeros-delete.component.css']
})
export class ContatosNumerosDeleteComponent implements OnInit {

  numero: NumerosDomain = {
    id: '',
    numero: ''
  }

  contatos_join: string = ''

  constructor(private service : NumerosService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.numero.id = this.route.snapshot.paramMap.get('id')!
    this.contatos_join = this.route.snapshot.paramMap.get('contatos_join')!
    this.delete()
  }

  delete() {
    this.service.delete(this.numero.id!).subscribe( () => {
      setTimeout(() => {
        this.router.navigate([`contatos/${this.contatos_join}/numeros`]);
      }, 3000);
    })
  }


}
