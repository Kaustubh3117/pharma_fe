import { SET_CATALOG, SET_COMBINED_CATALOG } from "../../actionTypes/catalogConstants/catalogConstants";

const initialState = {
    combinedCatalog: null,
    catalog: null
}

export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMBINED_CATALOG:
            return {
                ...state,
                combinedCatalog: action.payload,
            };
        case SET_CATALOG:
            return {
                ...state,
                catalog: action.payload
            }
        default:
            return state
    }
}