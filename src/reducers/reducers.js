const intialState = {
  users: [],
  currentUser: null,
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
