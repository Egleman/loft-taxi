import { AUTHENTICATE, logIn } from "../redux/action"
import { serverLogin } from "../Api/api";
import { useDispatch } from "react-redux";

export const authMiddleware = (store) => (next) => async (action) => {
  const dispatch = useDispatch();
  if (action.type === 'AUTHENTICATE') {
    const {email, password} = action.payload
    const success = await serverLogin(email, password)
    if(success) {
      store.dispatch(logIn())
    }
  } else {
    next(action)
  }
}