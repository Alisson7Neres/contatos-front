import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NumerosDomain } from '../../numeros/domain/numeros-domain';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {
  
  urlAPI: String = environment.urlAPI;
  
  constructor(private http : HttpClient) { }

  findAllByContatos(contatos_join : String) : Observable<NumerosDomain[]> {
    const url = `${this.urlAPI}numeros/?contatos=${contatos_join}`
    return this.http.get<NumerosDomain[]>(url)
  }

  create(numeros : NumerosDomain, contatos_join : string) : Observable<NumerosDomain> {
    const url = `${this.urlAPI}numeros/?contatos=${contatos_join}`
    return this.http.post<NumerosDomain>(url, numeros)
  }

  update(numeros : NumerosDomain) : Observable<NumerosDomain> {
    const url = `${this.urlAPI}numeros/${numeros.id}`
    return this.http.put<NumerosDomain>(url, numeros)
  }

  findAllNumeros(id : String) : Observable<NumerosDomain> {
    const url = `${this.urlAPI}numeros/${id}`
    return this.http.get<NumerosDomain>(url)
  }

  delete(id : String) : Observable<void>{
    const url = `${this.urlAPI}numeros/${id}`
    return this.http.delete<void>(url)
  }
}
