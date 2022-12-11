import { LOG_IN, LOG_OUT } from "../../store/action"

const initialState = {
  isLoggedIn: false
}

export default function AuthReducer(state = initialState, action) {
  switch(action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: state.isLoggedIn = true
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: state.isLoggedIn = false
      }
    }
    default: 
      return state
  }
}