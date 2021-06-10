import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import Spinner from "../components/Spinner"

/* Redux actions */
import {createProductAction} from "../actions/ProductsAction"

export default function NewProduct({history}) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("") 

    // Utilizamos useDispatch que nos devuelve una funcion
    const dispatch = useDispatch()

    //Acceder al state del store
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)

    // Llamamos el action de ProductAction
    const addNewProduct = (product) => dispatch(createProductAction(product, history))

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name.trim() || !price || price < 1) {
            return
        }
      
        //crear nuevo producto
        addNewProduct({
            name,
            price
        })
        
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
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
                                    onChange={e => setName(e.target.value)}
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
                                    onChange={e => setPrice(Number(e.target.value))}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                        {loading && 
                            <>
                                <Spinner />
                                <p className="text-center">Cargando...</p>
                            </>
                        }
                        {error && <p className="alert alert-danger p2 mt-4 text-center h6">Hubo un error</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
