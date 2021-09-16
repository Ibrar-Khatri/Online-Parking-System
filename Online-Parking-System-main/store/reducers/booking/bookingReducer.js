const initialState = {
  userBookings: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'userBookings':
      return { ...state, userBookings: action.payload };
    case 'addNewBooking':
      let newBooking = action.payload;
      return { ...state, userBookings: [...state.userBookings, newBooking] };
    case 'removeCurrentUserBooking':
      return { ...state, userBookings: null };
    default:
      return state;
  }
};

export default bookingReducer;
