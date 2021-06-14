import {
    ADD_PRODUCT_LOADING,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESSFUL,
    GET_PRODUCTS_ERROR,
    PRODUCT_TO_DELETE,
    PRODUCT_DELETE_SUCCESSFUL,
    PRODUCT_DELETE_ERROR,
    PRODUCT_TO_EDIT,
    PRODUCT_EDIT_SUCCESSFUL,
    PRODUCT_EDIT_ERROR,
} from "../types"


//Cada reducer tiene su propio state
const initalState = {
    products: [],
    error: false,
    loading: false,
    productToDelete: null,
    productToEdit: null
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
                ...state,
                products: [...state.products, action.payload],
                error: false,
                loading: false,
            }
        case ADD_PRODUCT_ERROR:
        case GET_PRODUCTS_ERROR:
        case PRODUCT_DELETE_ERROR:
        case PRODUCT_EDIT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
                productToDelete: null,
                productToEdit: null
            }
        case GET_PRODUCTS_SUCCESSFUL:
            return {
                ...state,
                products: action.payload,
                error: false,
                loading: false
            }
        case PRODUCT_TO_DELETE:
            return {
                ...state,
                productToDelete: action.payload
            }
        case PRODUCT_DELETE_SUCCESSFUL:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.productToDelete),
                productToDelete: null
            }
        case PRODUCT_TO_EDIT:
            return {
                ...state,
                productToEdit: action.payload
            }
        case PRODUCT_EDIT_SUCCESSFUL:
            return {
                ...state,
                products: state.products.map(product =>
                     product.id === action.payload.id
                     ?
                     action.payload
                     :
                     product
                ),
                productToEdit: null
            }
        default:
            return state
    }
}
