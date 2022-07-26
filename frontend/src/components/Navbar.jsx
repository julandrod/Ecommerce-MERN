import React from "react";
import { Link, NavLink } from "react-router-dom";
import Wrapper from "../styles/NavbarWrapper";
import Logo from "./Logo";
import { MenuRounded } from "@material-ui/icons";
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
import CartButtons from "./CartButtons";
import { sidebarOpen } from "../features/filtersSlice";

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
        <button className="nav-toggle" onClick={() => dispatch(sidebarOpen())}>
          <MenuRounded />
        </button>
      </div>
        <ul className="items-container">
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
      <CartButtons />
      
    </Wrapper>
  );
};

export default Navbar;
