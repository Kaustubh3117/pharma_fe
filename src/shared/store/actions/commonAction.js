import { GET_LOADER } from "../actionTypes/commonActionType"

export const setLoader = (showLoader) => {
    return {
        type: GET_LOADER,
        showLoader: showLoader
    }
}