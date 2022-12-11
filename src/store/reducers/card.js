import {SHOW_CARD_DATA} from '../../store/action'

const initialState = {
  cardNumber: undefined,
  cardName: undefined,
  expiryDate: undefined,
  cvc: undefined
}

export default function CardData(state = initialState, action) {
  switch(action.type) {
    case SHOW_CARD_DATA: {
      return {
        ...state,
        cardNumber: state.cardNumber = action.payload.cardNumber,
        cardName: state.cardName = action.payload.cardName,
        expiryDate: state.cardDate = action.payload.expiryDate,
        cvc: state.cvc = action.payload.cvc
      }
    }
    default: {
      return state
    }
  }
}