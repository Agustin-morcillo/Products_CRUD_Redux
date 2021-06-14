import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"

import {editProductAction} from "../actions/ProductsAction"

export default function EditProduct() {

    const dispatch = useDispatch()
    const history = useHistory()

    const [editedProduct, setEditedProduct] = useState({
        name: "",
        price: "",
        id: "",
    })
    const {name,price} = editedProduct

    const productToEdit = useSelector(state => state.products.productToEdit)
    
    if(!productToEdit) {
        history.push("/")
        return null
    }

    useEffect(() => {
        setEditedProduct(productToEdit)
    }, [productToEdit])

    const handleChange = (e) => {
        setEditedProduct({
            ...editedProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(editProductAction(editedProduct))

        history.push("/")
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label htmlFor="product-name">Nombre Producto</label>
                                <input 
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    id="product-name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="product-price">Precio Producto</label>
                                <input 
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    id="product-price"
                                    value={price}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
