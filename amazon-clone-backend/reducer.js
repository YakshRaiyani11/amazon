export const initialState = {
    user: null, // Initially no user is logged in
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      default:
        return state;
    }
  };
  