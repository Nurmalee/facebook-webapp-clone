export const initialState = {
    user: null
}

export const SET_USER = 'SET_USER'


const reducer = (state, action) => {
    if(action.type === SET_USER){
        return {
            ...state, user: action.payload
        }
    }

    return state
}

export default reducer