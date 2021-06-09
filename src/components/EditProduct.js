import React from 'react'

export default function EditProduct() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form>
                            <div className="form-group">
                                <label htmlFor="product-name">Nombre Producto</label>
                                <input 
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    id="product-name"
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
