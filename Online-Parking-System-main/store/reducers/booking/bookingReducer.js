const initialState = {
  userBookings: null,
  selectedAreaAllBookings: ''
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'userBookings':
      return { ...state, userBookings: action.payload };
    case 'addNewBooking':
      let newBooking = action.payload;
      return { ...state, userBookings: [...state.userBookings, newBooking] };
    case 'removeCurrentUserBooking':
      return initialState;
    case 'userSelectedAreaBooking':
      return { ...state, selectedAreaAllBookings: action.payload };
    case 'addNewBookingInAllBookings':
      return { ...state, selectedAreaAllBookings: [...state.selectedAreaAllBookings, action.payload] };
    default:
      return state;
  }
};

export default bookingReducer;
