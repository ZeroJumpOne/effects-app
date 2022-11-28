import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, of, tap } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as actions from '../actions';


@Injectable()
export class UsuarioEffects {

    constructor(private actions$: Actions,
                private usuarioServices: UsuarioService) {}

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(

            ofType( actions.cargarUsuario ),
            //tap( data => console.log('effect tap', data)),
            mergeMap(
                ( action ) => this.usuarioServices.getUserById( action.id )
                .pipe(
                    //tap( data => console.log('getUsers effect', data ))
                    map( user => actions.cargarUsuarioSuccess( { usuario: user } ) ),
                    catchError( err => of(actions.cargarUsuarioError( { payload: err} )))
                )
            )

        )
    );

}