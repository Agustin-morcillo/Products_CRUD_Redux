import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { editProductAction } from "../../actions/ProductsAction"
import { showAlertAction, hideAlertAction } from "../../actions/AlertsAction"

export default function EditProduct() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [editedProduct, setEditedProduct] = useState({
    name: "",
    price: "",
  })
  const { name, price } = editedProduct

  const productToEdit = useSelector((state) => state.products.productToEdit)
  const alert = useSelector((state) => state.alerts.alert)

  useEffect(() => {
    if (!productToEdit) {
      return history.push("/")
    }
    setEditedProduct(productToEdit)
    dispatch(hideAlertAction())
    // eslint-disable-next-line
  }, [productToEdit])

  const handleChange = (e) => {
    return setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim() || price === "") {
      const alert = {
        msg: "Ambos campos son obligatorios",
        classes: "alert alert-danger text-center p3",
      }
      return dispatch(showAlertAction(alert))
    } else if (price < 1) {
      const alert = {
        msg: "El precio debe ser mayor a 0",
        classes: "alert alert-danger text-center p3",
      }
      return dispatch(showAlertAction(alert))
    }

    dispatch(hideAlertAction())

    dispatch(editProductAction(editedProduct))

    return history.push("/")
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            {alert && <p className={alert.classes}>{alert.msg}</p>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="product-name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Ej: Licuado de fresas"
                  id="product-name"
                  value={name}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-success font-weight-bold text-uppercase d-block w-100"
              >
                <i className="fas fa-check icon"></i>Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
