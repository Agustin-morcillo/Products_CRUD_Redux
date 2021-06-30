import React from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"

import {
  deleteProductAction,
  getProductToEditAction,
} from "../../actions/ProductsAction"

export default function Product({ product }) {
  const { name, price, _id } = product

  const dispatch = useDispatch()
  const history = useHistory()

  const deleteProduct = async (id) => {
    const alert = await Swal.fire({
      title: "¿Estas seguro?",
      text: "Un producto que se elimina no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    })
    if (alert.isConfirmed) {
      dispatch(deleteProductAction(id))
    }
  }

  /* Identify the product to edit and redirect to the view */
  const EditProductRedirect = (product) => {
    dispatch(getProductToEditAction(product))
    history.push(`/products/edit/${product._id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">${price}</span>
      </td>
      <td className="actions">
        <button
          type="button"
          className="btn btn-warning mr-2 buttons action-btn edit-btn"
          onClick={() => EditProductRedirect(product)}
        >
          <i className="fas fa-edit icon"></i>Editar
        </button>

        <button
          type="button"
          className="btn btn-danger buttons action-btn"
          onClick={() => deleteProduct(_id)}
        >
          <i className="far fa-trash-alt icon"></i>Eliminar
        </button>
      </td>
    </tr>
  )
}
