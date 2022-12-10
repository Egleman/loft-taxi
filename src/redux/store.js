import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { authMiddleware } from '../middlewares/authMiddleware'
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


export const store = createStore(reducer, loadFromLocalStorage(), applyMiddleware(authMiddleware, saveCardMiddleware))

store.subscribe(() => saveToLoсalStorage(store.getState()))