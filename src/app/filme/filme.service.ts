import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Filme} from '../filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private baseUrl = 'http://localhost:8080/filme/listar-filmes';

  constructor(private http: HttpClient ) { }

  getFilme(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getFilmesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


  deleteFilme(id: number) {

  }

  saveFilme(filme: Filme) {
    return filme.titulo;
  }
}
