import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, of, tap } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usuariosActions from '../actions';


@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions,
                private usuarioServices: UsuarioService) {}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(

            ofType( usuariosActions.cargarUsuarios ),
            //tap( data => console.log('effect tap', data)),
            mergeMap(
                () => this.usuarioServices.getUsers()
                .pipe(
                    //tap( data => console.log('getUsers effect', data ))
                    map( users => usuariosActions.cargarUsuariosSuccess( { usuarios: users } ) ),
                    catchError( err => of(usuariosActions.cargarUsuariosError( { payload: err} )))
                )
            )

        )
    );

}