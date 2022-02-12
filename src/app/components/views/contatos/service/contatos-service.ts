import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ContatosDomain } from '../domain/contatos-domain';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  
  urlAPI: String = environment.urlAPI;
  
  constructor(private http : HttpClient) { }

  findAll() : Observable<any>{
    const url = `${this.urlAPI}contatos/`
    return this.http.get(url);
  }

  findById(id : String) : Observable<ContatosDomain> {
    const url = `${this.urlAPI}contatos/${id}`
    return this.http.get<ContatosDomain>(url);
  }

  create(contatos : ContatosDomain) : Observable<any> {
    const url = `${this.urlAPI}contatos/`
    return this.http.post(url,contatos);
  }

  update(contatos : ContatosDomain) : Observable<any> {
    const url = `${this.urlAPI}contatos/${contatos.id}`
    return this.http.put(url, contatos);
  }

  delete(id : String) : Observable<void> {
    const url = `${this.urlAPI}contatos/${id}`
    return this.http.delete<void>(url);
  }
}
