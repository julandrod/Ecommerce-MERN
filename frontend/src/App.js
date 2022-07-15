import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  Cart,
  Checkout,
  Error,
  Landing,
  Login,
  Order,
  ProductList,
  ProtectedRoute,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/products/todo" element={<ProductList gender="" />} />
        <Route
          path="/products/mujer"
          element={<ProductList gender="women" />}
        />
        <Route path="/products/hombre" element={<ProductList gender="men" />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
