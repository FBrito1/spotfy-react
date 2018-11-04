import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

// CALL -> CHAMADAS ASYNCRONAS;
// PUT -> DISPARAR ACTIONS/ ENVIAR INFO PARA REDUCERS;
import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails';

// SAGA P/ pegar as playlists
export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
