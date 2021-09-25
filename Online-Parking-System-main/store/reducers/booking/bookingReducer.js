const initialState = {
  allBookings: null,
  selectedAreaAllBookings: ''
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'allBookings':
      return { ...state, allBookings: action.payload };
    case 'addNewBooking':
      let newBooking = action.payload;
      return { ...state, allBookings: [...state.allBookings, newBooking] };
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
