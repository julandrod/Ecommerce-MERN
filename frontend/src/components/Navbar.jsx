import React from "react";
import { Link, NavLink } from "react-router-dom";
import Wrapper from "../styles/NavbarWrapper";
import Logo from "./Logo";
import {
  ShoppingCartOutlined,
  PersonOutlineOutlined,
  ExitToAppOutlined,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutUser,
  selectAuthState,
  showCurrentUser,
} from "../features/authSlice";
import { useEffect } from "react";
import {
  countTotals,
  selectCartState,
  showCartModal,
} from "../features/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(selectAuthState);
  const { totalItems, cartModal } = useSelector(selectCartState);

  useEffect(() => {
    dispatch(showCurrentUser());
    dispatch(countTotals());
  }, [dispatch]);

  useEffect(() => {
    if (cartModal) {
      setTimeout(() => {
        dispatch(showCartModal());
      }, 3000);
    }
  }, [dispatch, cartModal]);

  return (
    <Wrapper>
      <div className="logo-container">
        <Link to="/" className="link">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="items-container">
        <ul>
          <NavLink
            to="/products/mujer"
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
          >
            <li>Mujer</li>
          </NavLink>
          <NavLink
            to="/products/hombre"
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
          >
            <li>Hombre</li>
          </NavLink>
          <NavLink
            to="/products/todo"
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
          >
            <li>Todos</li>
          </NavLink>
        </ul>
      </div>
      <div className="login-cart-container">
        <Link to="/cart" className="cart-btn">
          <span className="cart-container">
            <ShoppingCartOutlined />
            <span className="cart-value">{totalItems}</span>
          </span>
        </Link>
        {cartModal && (
          <div className="dropdown">
            <span>Se agrego un item al carrito</span>
          </div>
        )}
        {userId ? (
          <button
            className="logout-btn"
            type="button"
            onClick={() => dispatch(logoutUser())}
          >
            <ExitToAppOutlined />
          </button>
        ) : (
          <Link to="/login" className="login-btn">
            <PersonOutlineOutlined />
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;
