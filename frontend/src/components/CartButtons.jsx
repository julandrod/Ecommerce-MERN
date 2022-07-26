import {
  ExitToAppOutlined,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser, selectAuthState } from "../features/authSlice";
import { selectCartState } from "../features/cartSlice";
import { sidebarClose } from "../features/filtersSlice";
import Wrapper from "../styles/CartButtonsWrapper";

const CartButtons = () => {
  const { userId } = useSelector(selectAuthState);
  const { totalItems, cartModal } = useSelector(selectCartState);
  const dispatch = useDispatch();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link
        to="/cart"
        className="cart-btn"
        onClick={() => dispatch(sidebarClose())}
      >
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
        <Link
          to="/login"
          className="login-btn"
          onClick={() => dispatch(sidebarClose())}
        >
          <PersonOutlineOutlined />
        </Link>
      )}
    </Wrapper>
  );
};

export default CartButtons;
