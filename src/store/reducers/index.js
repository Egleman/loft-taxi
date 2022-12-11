import { combineReducers } from "redux"
import AuthReducer from "./auth"
import CardData from "./card"
import PageReducer from './pages';

export default combineReducers({AuthReducer, CardData, PageReducer})