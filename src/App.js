import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import ProductsList from "./components/products/ProductsList"
import CreateProduct from "./components/products/CreateProduct"
import EditProduct from "./components/products/EditProduct"
import PageNotFound from "./components/PageNotFound"

function App() {
  return (
    <Router>
      <Header />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route exact path="/products/create" component={CreateProduct} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
