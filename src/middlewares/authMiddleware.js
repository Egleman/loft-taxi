import { AUTHENTICATE, logIn, Hist } from "../store/action"
import { serverLogin } from "../Api/api"

export const AuthMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload
    const success = await serverLogin(email, password)
    if(success) {
      store.dispatch(logIn())
    }
  } else {
    next(action)
  }
}