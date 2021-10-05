const initialState = {
  userDetails: {},
  allUsers: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addUserDetails':
      return {
        ...state,
        userDetails: action.payload,
      };
    case 'allUsersList':
      return {
        ...state,
        allUsers: action.payload,
      };
    case 'addNewUserInAllUsers':
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
    case 'removeUserFromAllUsers':
      let updateUsers = state.allUsers.filter(user => user.uid != action.payload)
      return {
        ...state,
        allUsers: updateUsers,
      };
    case 'removeUserDetails':
      return initialState
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
