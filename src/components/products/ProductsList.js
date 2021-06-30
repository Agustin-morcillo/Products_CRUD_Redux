import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Product from "./Product"
import Spinner from "../Spinner"

import { getProductsAction } from "../../actions/ProductsAction"

export default function ProductsList() {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products.products)
  const error = useSelector((state) => state.products.error)
  const loading = useSelector((state) => state.products.loading)

  useEffect(() => {
    const getProducts = () => dispatch(getProductsAction())
    getProducts()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>

      <div className="create-btn">
        <Link
          to={"/products/create"}
          className="btn btn-success new-product d-block d-md-inline-block add-btn"
        >
          <i className="fas fa-plus icon"></i> Agregar Producto
        </Link>
      </div>

      {error && (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      )}

      {loading && (
        <>
          <Spinner />
          <p className="text-center">Cargando...</p>
        </>
      )}

      {products.length < 1 ? (
        <p className="no-product bg-info">No hay productos</p>
      ) : (
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product key={product._id + 1} product={product} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
