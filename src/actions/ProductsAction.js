import {
    ADD_PRODUCT_LOADING,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESSFUL,
    GET_PRODUCTS_ERROR
} from "../types"
import axiosClient from "../config/axios"
import Swal from "sweetalert2"

export function createProductAction(product, history) {
    return async (dispatch) => {
        
        dispatch(addProductLoading())

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

const addProductLoading = () => ({
    type: ADD_PRODUCT_LOADING,
    payload: true
})

const addProductSuccessful = (product) => ({
    type: ADD_PRODUCT_SUCCESSFUL,
    payload: product
})

const addProductError = (errorState) => ({
    type: ADD_PRODUCT_ERROR,
    payload: errorState
})


export function getProductsAction() {
    return async (dispatch) => {
        dispatch(getProductsLoading())

        try {
            const response = await axiosClient.get("/products")
            dispatch(getProductsSuccessful(response.data))
        } catch (error) {
            console.log(error)
            dispatch(getProductsError(true))
        }
    }
}

const getProductsLoading = () => ({
    type: GET_PRODUCTS_LOADING,
    payload: true
})

const getProductsSuccessful = (products) => ({
    type: GET_PRODUCTS_SUCCESSFUL,
    payload: products
})

const getProductsError = (errorState) => ({
    type: GET_PRODUCTS_ERROR,
    payload: errorState
})


