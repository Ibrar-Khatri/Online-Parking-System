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
    case 'updateUserDetails':
      let updates
      if (action.payload.condition === 'imageAdded') {
        console.log('Condition1 ' + action.payload.condition)
        updates = { ...state.userDetails, displayName: action.payload.displayName, profileImage: action.payload.displayName }
      } else if (action.payload.condition === 'imageRemoved') {
        console.log('Condition2 ' + action.payload.condition)
        updates = { ...state.userDetails, displayName: action.payload.displayName, profileImage: '' }
      } else if (action.payload.condition === 'updateDetails') {
        console.log('Condition3 ' + action.payload.condition)
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
