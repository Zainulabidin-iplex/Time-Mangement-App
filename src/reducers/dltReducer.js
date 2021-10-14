const initState = {
    users: [],
  };
  
  const dltReducer = (state = initState, action) => {
    switch (action.type) {
      case "DELETE_ACTION":
        return {
          ...state,
          users: [...state.users, action.logindata],
        };
      default:
        return state;
    }
  };
  
  export default dltReducer;