import {SHOW_CARD_DATA, LOG_IN, LOG_OUT, REGISTER_PAGE, LOGIN_PAGE} from './action';

const initialState = {
    // page: 'Login',
    // loginPage: true,
    // cardDetails: false,
    // modal: false,
    // modalSave: false,
    // cardData: {
    //   name: 'IVAN IVANOV',
    //   time: '05/08',
    //   number: '0000 0000 0000 0000',
    //   secret: '667'
    // }
    startPage: 'login',
    isLoggedIn: false,
    cardNumber: undefined,
    cardName: undefined,
    expiryDate: undefined,
    cvc: undefined
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "REGISTER": 
//       return {
//         ...state,
//         loginPage: state.loginPage = false
//       };
//     case "INSIDE": 
//       return {
//         ...state,
//         loginPage: state.loginPage = true
//       };
//     case "MAP": 
//       return {
//         ...state,
//         page: state.page = 'Map',
//         modal: state.modal = false,
//       };
//     case "SAVE-PAGE": 
//       return {
//         ...state,
//         modal: state.modal = false,
//       };
//     case "EXIT": 
//       return {
//         ...state,
//         page: state.page = 'Login'
//       };
//     case "PROFILE": 
//       return {
//         ...state,
//         modal: state.modal = true
//       };
//     case "HIDDEN": 
//       return {
//         ...state,
//         modal: state.modal = false
//       };
//     case "CARD-DETAILS": 
//       return {
//         ...state,
//         cardDetails: state.cardDetails = true
//       };
//     case "DATACARD": 
//       return {
//         ...state, 
//         cardData: state.cardData = {
//           name: action.name,
//           time: action.time,
//           secret: action.secret,
//           number: action.cardNumber
//         }
//       };
//     default:  return state;
//   }
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CARD_DATA:
      return {
        ...state,
        cardNumber: state.cardNumber = action.payload.cardNumber,
        cardName: state.cardName = action.payload.cardName,
        expiryDate: state.expiryDate = action.payload.expiryDate,
        cvc: state.cvc = action.payload.cvc
      };
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
      case "AUTHENTICATE": {
        return {
          ...state,
          isLoggedIn: state.isLoggedIn = true
        }
      }
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
      default:  return state;
  }
}

export default reducer;