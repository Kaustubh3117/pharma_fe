import { SET_LOADER } from "../actionTypes/commonActionType"

const initialState = {
    loading: false
}

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADER:
            return {
                ...state,
                loading: action.data
            }
        default:
            return state
    }
}