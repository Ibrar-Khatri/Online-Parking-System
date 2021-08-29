const initialState = {
  userDetails: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addUserDetails':
      return {
        ...state,
        userDetails: action.payload,
      };
    case 'removeUserDetails':
      return {
        userDetails: {},
      };
    default:
      return state;
  }
};

export default userReducer;
