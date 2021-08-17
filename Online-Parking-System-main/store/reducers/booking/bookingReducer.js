const initialState = {
  userBookings: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'userBookings':
      console.log(action)
      return { ...state, userBookings: action.payload};
    case 'addNewBooking':
      let newBooking = action.payload;
      return {...state, userBookings: [...state.userBookings, newBooking]};
    default:
      return state;
  }
};

export default bookingReducer;
