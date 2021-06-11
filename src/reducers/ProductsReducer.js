import {
    ADD_PRODUCT_LOADING,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESSFUL,
    GET_PRODUCTS_ERROR
} from "../types"


//Cada reducer tiene su propio state
const initalState = {
    products: [],
    error: false,
    loading: false
}

export default function(state = initalState, action) {
    switch (action.type) {
        case ADD_PRODUCT_LOADING:
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case ADD_PRODUCT_SUCCESSFUL:
            return {
                products: [...state.products, action.payload],
                error: false,
                loading: false,
            }
        case ADD_PRODUCT_ERROR:
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case GET_PRODUCTS_SUCCESSFUL:
            return {
                products: action.payload,
                error: false,
                loading: false
            }
        default:
            return state
    }
}
