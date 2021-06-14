import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import PropTypes from 'prop-types';
import Spinner from "../components/Spinner"

/* Redux actions */
import {createProductAction} from "../actions/ProductsAction"
import {showAlertAction, hideAlertAction} from "../actions/AlertsAction"

export default function NewProduct({history}) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("") 

    // Utilizamos useDispatch que nos devuelve una funcion
    const dispatch = useDispatch()

    //Acceder al state del store
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)
    const alert = useSelector(state => state.alerts.alert)

    useEffect(() => {
        dispatch(hideAlertAction())
        // eslint-disable-next-line
    }, [])
    

    // Llamamos el action de ProductAction
    const addNewProduct = (product) => dispatch(createProductAction(product, history))

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name.trim() || price === "") {
            const alert = {
                msg: "Ambos campos son obligatorios",
                classes: "alert alert-danger text-center p3"
            }
            return dispatch(showAlertAction(alert))
        } else if(price < 1) {
            const alert = {
                msg: "El precio debe ser mayor a 0",
                classes: "alert alert-danger text-center p3"
            }
            return dispatch(showAlertAction(alert))
        }

        dispatch(hideAlertAction())
      
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
                            Agregar Producto
                        </h2>

                        {alert && <p className={alert.classes}>{alert.msg}</p>}

                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label htmlFor="product-name">Nombre</label>
                                <input 
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Ej: Licuado de fresas"
                                    id="product-name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="product-price">Precio</label>
                                <input 
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    placeholder="Ej: 500"
                                    id="product-price"
                                    value={price}
                                    onChange={e => setPrice(Number(e.target.value))}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success font-weight-bold text-uppercase d-block w-100"
                            ><i className="fas fa-check icon"></i>Guardar Producto</button>
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

NewProduct.propTypes = {
    history: PropTypes.object
  };
