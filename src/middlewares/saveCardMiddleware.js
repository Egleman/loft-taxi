import { showCardData } from "../redux/action";
import { serverSaveCard } from "../Api/api";
import { SAVE_CARD } from "../redux/action";

export const saveCardMiddleware = (store) => (next) => async (action) => {
  if (action.type === SAVE_CARD) {
    const {
      cardNumber,
      cardName,
      expiryDate,
      cvc,
      token
    } = action.payload

    const succes = await serverSaveCard({
      cardNumber,
      cardName,
      expiryDate,
      cvc,
      token
    });

    if (succes) {
      store.dispatch(showCardData({
        cardNumber,
        cardName,
        expiryDate,
        cvc
      }))
    }
  } else {
    next(action)
  }
}