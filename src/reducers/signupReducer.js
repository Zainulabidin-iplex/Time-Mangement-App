const initState = {
  users: [],
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTRATION_ACTION":
      return {
        ...state,
        users: [...state.users, action.registerdata],
      };
    default:
      return state;
  }
};

export default signupReducer;
