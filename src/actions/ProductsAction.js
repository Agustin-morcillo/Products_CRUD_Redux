import {
    ADD_PRODUCT,
    ADD_PRODUCT_OK,
    ADD_PRODUCT_ERROR
} from "../types"

export function createProductAction(product) {
    return () => {
        console.log(product)
    }
}

