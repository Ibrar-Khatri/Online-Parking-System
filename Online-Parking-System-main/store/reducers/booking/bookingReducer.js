const initialState = {
  allBookings: null,
  selectedAreaAllBookings: []
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
    case 'addNewBookingInSelectedArea':
      return { ...state, selectedAreaAllBookings: [...state.selectedAreaAllBookings, action.payload] };
    case 'removeUpComingBooking':
      // console.log('before', action.payload)
      let updateAllBookings = state.allBookings.filter(bking => bking.id != action.payload)
      console.log('before ', state.selectedAreaAllBookings.length)
      let updateSelectedAreaAllBookings = state.selectedAreaAllBookings.filter(bking => bking.id != action.payload)
      console.log('after ', updateSelectedAreaAllBookings.length)
      return {
        ...state, allBookings: updateAllBookings, selectedAreaAllBookings: updateSelectedAreaAllBookings
      };
    default:
      return state;
  }
};

export default bookingReducer;
