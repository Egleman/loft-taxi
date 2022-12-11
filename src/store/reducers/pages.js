import { LOG_IN, LOG_OUT } from "../../store/action"

const initialState = {
    startPage: '/login',
}

export default function PageReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_PAGE': {
        return {
          ...state,
          startPage: state.startPage = '/login'
        }
      }
      case "REGISTER_PAGE": {
        return {
          ...state,
          startPage: state.startPage = '/register'
        }
      }
    default: 
      return state
  }
}