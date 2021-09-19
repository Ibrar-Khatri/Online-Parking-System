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
        ...state,
        userDetails: {},
      }
    case 'updateUserDetails':
      let updates
      if (action.payload.condition === 'imageAdded') {
        updates = { ...state.userDetails, displayName: action.payload.displayName, profileImage: action.payload.profileImage }
      } else if (action.payload.condition === 'imageRemoved') {
        updates = { ...state.userDetails, displayName: action.payload.displayName, profileImage: '' }
      } else if (action.payload.condition === 'updateDetails') {
        updates = { ...state.userDetails, displayName: action.payload.displayName }
      }
      return {
        ...state, userDetails: updates
      };
    default:
      return state;
  }
};

export default userReducer;
