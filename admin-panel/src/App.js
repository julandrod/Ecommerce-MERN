import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import {
  Home,
  Login,
  NewProduct,
  NewUser,
  Order,
  OrderList,
  Product,
  ProductList,
  User,
  UserList,
} from "./pages";
import { Sidebar, Topbar } from "./components";
import { selectUserState } from "./features/userSlice";

function App() {
  const { userInfo } = useSelector(selectUserState);

  return (
    <Router>
      <>
        <Topbar />
        <div className="container">
          {userInfo && <Sidebar />}
          <Routes>
            {!userInfo ? (
              <>
                <Route path="*" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<Login />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<Navigate replace to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:productId" element={<Product />} />
                <Route path="/newProduct" element={<NewProduct />} />
                <Route path="/orders" element={<OrderList />} />
                <Route path="/orders/:orderId" element={<Order />} />
              </>
            )}
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
