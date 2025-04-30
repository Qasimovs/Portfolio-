import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// Diğer importlar...

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <Navbar />
          <Routes>
            {/* Route tanımları */}
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;