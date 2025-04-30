import { useState } from 'react'
import './App.css'
import Products from "./pages/Products";
import Product from './components/product/Product';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Products/>
      <Product/> 
    </>
  )
}

export default App
