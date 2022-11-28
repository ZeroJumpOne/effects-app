import { createReducer, on, State } from '@ngrx/store';
import { Usuario, usuarioEmpty } from 'src/app/models/usuario.model';
import * as actions from '../actions/index';

export interface UsuarioState {
    id: number,
    user: Usuario,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuarioInitialState: UsuarioState = {
    id: 0,
    user: usuarioEmpty,
    loaded: false,
    loading: false,
    error: null
};

export const usuarioReducer = createReducer(usuarioInitialState,

    on(actions.cargarUsuario, (state, { id }) => ({
        ...state,
        loading: true,
        id: id
    })),
  
    on(actions.cargarUsuarioSuccess, (state, { usuario }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: { ...usuario }
    })),

  on(actions.cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
      status: payload.status
    }
  }))
);