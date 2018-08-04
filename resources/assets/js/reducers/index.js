import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import PaletteReducer from './PaletteReducer';
import GradientReducer from './GradientReducer';

export default combineReducers({
  AppReducer,
  PaletteReducer,
  GradientReducer
});