export const initialState = {
    user: null,
    userImage: ''
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
                userImage: action.userimage
            }
            default:
                return state;
    }
}

export default reducer;