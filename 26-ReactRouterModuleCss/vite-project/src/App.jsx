// import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import About from './pages/About'
import Contact from './pages/Contact'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Services from './pages/Services'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: "<Layout />",
    children: [
      {
        path: "/",
        element: "<Home />"
      },
      {
        path: "/about",
        element: "<About />"
      },
      {
        path: "/contact",
        element: "<Contact />"
      },
      {
        path: "/services",
        element: "<Services />"
      },
      {
        path: "*",
        element: <div>Not Found</div>
      }

    ]
  }
])



function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
    <Home/>
    
      <RouterProvider router = { router}/>
    </>
  )
}

export default App
