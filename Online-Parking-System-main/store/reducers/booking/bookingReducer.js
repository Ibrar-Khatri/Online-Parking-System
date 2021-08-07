const initialState = {
  userBookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'allBookings':
      return {userBookings: action.type};
    case 'addNewBooking':
      let newBooking = action.payload;
      return {...state, userBookings: [...state.userBookings, newBooking]};
    default:
      return state;
  }
};

export default bookingReducer;
