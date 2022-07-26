import { useDispatch, useSelector } from "react-redux";
import { selectAuthState } from "../features/authSlice";
import { selectFilterState, sidebarClose } from "../features/filtersSlice";
import Wrapper from "../styles/SidebarWrapper";
import { CloseRounded } from "@material-ui/icons";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector(selectFilterState);
  const { userId } = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <Logo />
          <button
            className="close-btn"
            type="button"
            onClick={() => dispatch(sidebarClose())}
          >
            <CloseRounded />
          </button>
        </div>
        <ul className="links">
          <li>
            <Link to="/products/mujer" onClick={() => dispatch(sidebarClose())}>
              Mujer
            </Link>
          </li>
          <li>
            <Link
              to="/products/hombre"
              onClick={() => dispatch(sidebarClose())}
            >
              Hombre
            </Link>
          </li>
          <li>
            <Link to="/products/todo" onClick={() => dispatch(sidebarClose())}>
              Todos
            </Link>
          </li>
        </ul>
        <div className="cart-btn-wrapper">
          <CartButtons className="cart" />
        </div>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
