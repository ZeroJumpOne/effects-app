import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';

import * as actions from '../../store/actions';
import { Usuario, usuarioEmpty } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  user: Usuario = usuarioEmpty;
  loading:  boolean = false;
  error: any;

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuario').subscribe( ({ user, loading, error }) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
      //console.log(user);
    })


    this.route.params.subscribe( ({ id }) => {
      //console.log(id);

      this.store.dispatch(actions.cargarUsuario({ id: id }))
    })

    
  }

}
