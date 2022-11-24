import { act } from "react-dom/test-utils";

const initialState = {
    page: 'Login',
    loginPage: true,
    cardDetails: false,
    cardData: {
      name: '',
      time: '',
      number: '',
      secret: ''
    }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER": 
      return {
        ...state,
        loginPage: state.loginPage = false
      };
    case "INSIDE": 
      return {
        ...state,
        loginPage: state.loginPage = true
      };
    case "MAP": 
      return {
        ...state,
        page: state.page = 'Map'
      };
    case "EXIT": 
      return {
        ...state,
        page: state.page = 'Login'
      };
    case "PROFILE": 
      return {
        ...state,
        page: state.page = 'Profile'
      };
    case "CARD-DETAILS": 
      return {
        ...state,
        cardDetails: state.cardDetails = true
      };
    case "DATACARD": 
      return {
        ...state, 
        cardData: state.cardData = {
          name: action.name,
          time: action.time,
          secret: action.secret,
          number: action.cardNumber
        }
      };
    default:  return state;
  }
}

export default reducer;