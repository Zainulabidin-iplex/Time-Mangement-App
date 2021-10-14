const initState = {
  token: {},
  login: {},
};

const loginReducer = (state = initState, action) => {
  // console.log("action data is", action.token);
  switch (action.type) {
    case "LOGIN_ACTION":
      return {
        ...state,
        login: action.logindata,
        token: action.token,
  // isloggedin: true
      };
    default:
      return state;
  }
};

export default loginReducer;
