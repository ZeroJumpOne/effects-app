import { createReducer, on, State } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as actions from '../actions/index';

export interface UsuariosState {
    users: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export const usuariosReducer = createReducer(
    usuariosInitialState,
  on(actions.cargarUsuarios,        (state) => ({...state, loading: true})),
  
  on(actions.cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [ ...usuarios ]    
  })),

  on(actions.cargarUsuariosError, (state, { payload }) => ({
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