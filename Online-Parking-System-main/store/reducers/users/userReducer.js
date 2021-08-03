

const initialState = {
    userDetails: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addUserDetails':
            console.log('user detauls ' + action.payload)

            return {
                ...state, userDetails: action.payload
            };
        default:
            return state;
    }

};

export default userReducer;