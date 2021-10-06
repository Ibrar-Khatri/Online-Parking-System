const initialState = {
  allBookings: null,
  selectedAreaAllBookings: [],
  locations: []
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'allLocation':
      return { ...state, locations: action.payload };
    case 'addNewLocation':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'removeLocation':
      let updatedLocations = state.locations.filter(location => location.id != action.payload.pakringAreaID)
      let updatedAllBookings = state.allBookings.filter(booking => !action.payload.removedBookingsId.includes(booking.id))
      let updatedSelectedAreaBookings = state.selectedAreaAllBookings.filter(booking => !action.payload.removedBookingsId.includes(booking.id))
      return { ...state, locations: updatedLocations, allBookings: updatedAllBookings, selectedAreaAllBookings: updatedSelectedAreaBookings };
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
    case 'removeAllBookingsOfDeletedUser':
      let allBookings = state.allBookings?.filter(bking => bking.userId !== action.payload)
      let selectedAreaAllBookings = state.selectedAreaAllBookings?.filter(bking => bking.userId !== action.payload)
      return {
        ...state, allBookings: allBookings, selectedAreaAllBookings: selectedAreaAllBookings
      };
    default:
      return state;
  }
};

export default bookingReducer;
