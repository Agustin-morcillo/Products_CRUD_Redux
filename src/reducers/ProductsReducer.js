import {
    ADD_PRODUCT,
    ADD_PRODUCT_OK,
    ADD_PRODUCT_ERROR
} from "../types"


//Cada reducer tiene su propio state
const initalState = {
    products: [],
    error: null,
    loading: false
}

export default function(state = initalState, action) {
    switch (action.type) {
        default:
            return state
    }
}
