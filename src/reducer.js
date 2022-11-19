const initialState = {
    page: 'Login',
    loginPage: true,
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
    default:  return state;
  }
}

export default reducer;