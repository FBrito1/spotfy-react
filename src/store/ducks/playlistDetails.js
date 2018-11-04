// Component chama o getRequest que vai chamar o saga(async)
// Assim que o saga tiver os dados vai chamar os success que vai retornar os dados.

// Actions types
export const Types = {
  GET_REQUEST: 'playlistDetails/GET_REQUEST',
  GET_SUCCESS: 'playlistDetails/GET_SUCCESS',
};

// Initial state do reducer
const INITIAL_STATE = {
  data: {},
  loading: false,
};

// Reducer que trata as actions;
export default function playlistDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}


// Actions disparadas pelos components;
export const Creators = {
  getPlaylistDetailRequest: id => ({
    type: Types.GET_REQUEST, payload: { id }
  }),

  getPlaylistDetailSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
