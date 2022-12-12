import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { AuthMiddleware } from '../middlewares/authMiddleware'
import {saveCardMiddleware} from '../middlewares/saveCardMiddleware'

function saveToLoсalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state)
    console.log(serialisedState)
    localStorage.setItem('loftTaxiUserData', serialisedState)
  } catch (e) {}
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('loftTaxiUserData')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    return undefined
  }
}


export const store = createStore(rootReducer, loadFromLocalStorage(), applyMiddleware(AuthMiddleware, saveCardMiddleware))

store.subscribe(() => saveToLoсalStorage(store.getState()))