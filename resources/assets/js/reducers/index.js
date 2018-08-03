import { combineReducers } from 'redux';
import PaletteReducer from './PaletteReducer';
import GradientReducer from './GradientReducer';

export default combineReducers({
  PaletteReducer,
  GradientReducer
});