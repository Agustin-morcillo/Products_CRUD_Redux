import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="title-container">
                <h1>
                    <Link to={"/"} className="text-light page-title">
                        CRUD - React, Redux, REST API & Axios
                    </Link>
                </h1>
            </div>
        </nav>
    )
}
