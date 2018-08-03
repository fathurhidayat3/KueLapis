import * as types from '../actions/ActionTypes';

export default function (state = { ...state, data: [], selected: {} }, action) {
  switch (action.type) {
    case types.DETAIL_PALETTE:
      return { ...state, selected: action.data }
    default:
      return state;
  }
}
