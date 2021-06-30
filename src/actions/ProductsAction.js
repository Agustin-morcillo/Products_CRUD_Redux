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
import axiosClient from "../config/axios"
import Swal from "sweetalert2"

/* Get all products from the database */
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

/* Functions to get the products */
const getProductsLoading = () => ({
  type: GET_PRODUCTS_LOADING,
  payload: true,
})

const getProductsSuccessful = (products) => ({
  type: GET_PRODUCTS_SUCCESSFUL,
  payload: products,
})

const getProductsError = (errorState) => ({
  type: GET_PRODUCTS_ERROR,
  payload: errorState,
})

/* -------------------------------------------------- */

/* Create a new Product */
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

      if (alert.isConfirmed) {
        return history.push("/")
      }
    } catch (error) {
      console.log(error)

      dispatch(addProductError(true))

      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta nuevamente",
      })
    }
  }
}

/* Functions to create a product */
const addProductLoading = () => ({
  type: ADD_PRODUCT_LOADING,
  payload: true,
})

const addProductSuccessful = (product) => ({
  type: ADD_PRODUCT_SUCCESSFUL,
  payload: product,
})

const addProductError = (errorState) => ({
  type: ADD_PRODUCT_ERROR,
  payload: errorState,
})

/* -------------------------------------------------- */

/* Get product to edit */
export function getProductToEditAction(product) {
  return (dispatch) => {
    dispatch(getProductToEdit(product))
  }
}

/* Function to get the product to edit */
const getProductToEdit = (product) => ({
  type: PRODUCT_TO_EDIT,
  payload: product,
})

/* -------------------------------------------------- */

/* Editing product */
export function editProductAction(product) {
  return async (dispatch) => {
    try {
      await axiosClient.put(`/products/${product._id}`, product)
      dispatch(editProductSuccessful(product))
    } catch (error) {
      console.log(error)
      dispatch(editProductError(true))
    }
  }
}

/* Functions to edit a product */
const editProductSuccessful = (product) => ({
  type: PRODUCT_EDIT_SUCCESSFUL,
  payload: product,
})

const editProductError = (errorState) => ({
  type: PRODUCT_EDIT_ERROR,
  payload: errorState,
})

/* -------------------------------------------------- */

/* Deleting product */
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getProductToDelete(id))

    try {
      await axiosClient.delete(`/products/${id}`)
      dispatch(deleteProductSuccessful())
      getProductsAction()
      Swal.fire("Eliminado", "El producto se elimino correctamente", "success")
    } catch (error) {
      dispatch(deleteProductError(true))
    }
  }
}

/* Functions to deleting a product */
const getProductToDelete = (id) => ({
  type: PRODUCT_TO_DELETE,
  payload: id,
})

const deleteProductSuccessful = () => ({
  type: PRODUCT_DELETE_SUCCESSFUL,
})

const deleteProductError = (errorState) => ({
  type: PRODUCT_DELETE_ERROR,
  payload: errorState,
})
