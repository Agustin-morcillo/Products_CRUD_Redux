import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Products from "./components/Products"
import CreateProduct from "./components/CreateProduct"
import EditProduct from "./components/EditProduct"

function App() {
  return (
    <Router>
      <Header />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/create" component={CreateProduct} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
