import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import ProductList from "./Pages/ProductList"
import ProductDetails from "./Pages/ProductDetails"
import CartList from "./Pages/CartList"
import PageNotFound from "./Pages/PageNotFound"
import Checkout from "./Pages/CheckOut/Checkout"
import TopNavBar from "./Pages/topNavBar"


function App() {

  return <Fragment>
    <Routes>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/" element={<ProductList/>}/>
    <Route path="/product-details/:id" element={<ProductDetails/>}/>
    <Route path="/cart" element={<CartList/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    <Route path="/top" element={<TopNavBar/>}/>
    </Routes>
  </Fragment>
}

export default App
