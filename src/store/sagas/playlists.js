import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

// CALL -> CHAMADAS ASYNCRONAS;
// PUT -> DISPARAR ACTIONS/ ENVIAR INFO PARA REDUCERS;
import { Creators as PlaylistsActions } from '../ducks/playlists';

// SAGA P/ pegar as playlists
export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
