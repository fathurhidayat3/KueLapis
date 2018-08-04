import * as types from './ActionTypes';

export const panelStatus = status => ({
  type: types.PANEL_STATUS,
  data: status
});