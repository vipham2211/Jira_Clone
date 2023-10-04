import { LOADING_SPINNER } from "constants"

export const LoadingSpinnerAction = (action) =>{
    return {
        type:LOADING_SPINNER,
        data:action
    }
}