import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
}
