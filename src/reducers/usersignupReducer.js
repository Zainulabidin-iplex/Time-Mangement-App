const initState = {
    users: [],
  };
  
  const usersignupReducer = (state = initState, action) => {
    switch (action.type) {
      case "REGISTRATION_USER":
        return {
          ...state,
          users: [...state.users, action.registerdata],
        };
      default:
        return state;
    }
  };
  
  export default usersignupReducer;