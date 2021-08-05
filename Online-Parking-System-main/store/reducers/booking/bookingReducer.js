const initialState = {
  selectedArea: '',
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'selectArea':
      return {
        selectedArea: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
