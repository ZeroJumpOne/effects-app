import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${ this.url }/users?per_page=6&delay=4`)
    .pipe(
      map( (resp: any) => {
        return resp['data'];
      })
    );
  }

  getUserById(id: number) {
    return this.http.get(`${ this.url }/users/${ id }`)
    .pipe(
      map( (resp: any) => {
        return resp['data'];
      })
    );    
  }
}
