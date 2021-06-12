import React from 'react'
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import Swal from "sweetalert2"

/* Redux actions */
import {deleteProductAction} from "../actions/ProductsAction"

export default function Product({product}) {

    const {name,price,id} = product

    const dispatch = useDispatch()

    const deleteProduct = async (id) => {
        const alert = await Swal.fire({
            title: "¿Estas seguro?",
            text: "Un producto que se elimina no se puede recuperar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar"
        })
        if(alert.isConfirmed) {
            dispatch(deleteProductAction(id))
        }
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">${price}</span></td>
            <td className="acciones">
                <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=> deleteProduct(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}
