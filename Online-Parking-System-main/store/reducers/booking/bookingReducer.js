const initialState = {
  allBookings: null,
  selectedAreaAllBookings: [],
  locations: ''
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'allLocation':
      return { ...state, locations: action.payload };
    case 'addNewLocation':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'allBookings':
      return { ...state, allBookings: action.payload };
    case 'addNewBooking':
      return { ...state, allBookings: [...state.allBookings, action.payload] };
    case 'removeCurrentUserBooking':
      return initialState;
    case 'userSelectedAreaBooking':
      return { ...state, selectedAreaAllBookings: action.payload };
    case 'addNewBookingInSelectedArea':
      return { ...state, selectedAreaAllBookings: [...state.selectedAreaAllBookings, action.payload] };
    case 'removeUpComingBooking':
      let updateAllBookings = state.allBookings.filter(bking => bking.id !== action.payload)
      let updateSelectedAreaAllBookings = state.selectedAreaAllBookings?.filter(bking => bking.id !== action.payload)
      return {
        ...state, allBookings: updateAllBookings, selectedAreaAllBookings: updateSelectedAreaAllBookings
      };
    default:
      return state;
  }
};

export default bookingReducer;
