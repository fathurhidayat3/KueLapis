import * as types from './ActionTypes';

export const detailPalette = selected  => ({
  type: types.DETAIL_PALETTE,
  data: selected
});