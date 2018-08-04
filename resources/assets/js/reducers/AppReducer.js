import * as types from '../actions/ActionTypes';

export default function (state = { ...state, panel_status: 0 }, action) {
  switch (action.type) {
    case types.PANEL_STATUS:
      return { ...state, panel_status: action.data }
    default:
      return state;
  }
}