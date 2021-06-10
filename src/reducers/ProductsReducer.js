import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR
} from "../types"


//Cada reducer tiene su propio state
const initalState = {
    products: [],
    error: false,
    loading: false
}

export default function(state = initalState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true,
            }
        case ADD_PRODUCT_SUCCESSFUL:
            return {
                products: [...state.products, action.payload],
                error: false,
                loading: false,
            }
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}
