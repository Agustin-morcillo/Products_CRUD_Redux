import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR
} from "../types"
import axiosClient from "../config/axios"
import Swal from "sweetalert2"

export function createProductAction(product, history) {
    return async (dispatch) => {
        
        dispatch(addProduct())

        try {
            await axiosClient.post("/products", product)

            dispatch(addProductSuccessful(product))

            const alert = await Swal.fire(
                "Correcto",
                "El producto se agrego correctamente",
                "success"
            )
            
            if(alert.isConfirmed) {
                return history.push("/")
            }
        } catch (error) {
            console.log(error)
           
            dispatch(addProductError(true))
            
            Swal.fire({
                icon:"error",
                title: "Hubo un error",
                text: "Hubo un error, intenta nuevamente"
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT
})

const addProductSuccessful = (product) => ({
    type: ADD_PRODUCT_SUCCESSFUL,
    payload: product
})

const addProductError = (errorState) => ({
    type: ADD_PRODUCT_ERROR,
    payload: errorState
})

