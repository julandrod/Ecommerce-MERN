import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../styles/CartWrapper";
import { clearCart, countTotals, selectCartState } from "../features/cartSlice";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  const { cartItems, totalItems } = useSelector(selectCartState);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(countTotals());
  }, [dispatch, cartItems]);

  if (cartItems.length < 1) {
    return (
      <Wrapper className="full-page">
        <div className="empty">
          <h1 className="title">Carrito de compras</h1>
          <h2>Tu carrito esta actualmente vacio</h2>
          <Link to="/products/todo" className="btn link-btn">
            Seguir comprando
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1 className="title">Tu carrito</h1>
      <div className="top">
        <Link to="/products/todo" className="btn link-btn">
          <span>Seguir comprando</span>
        </Link>
        <div className="top-texts">
          <span>Articulos en el carrito ({totalItems})</span>
        </div>
        <button
          className="btn clear-cart-btn"
          onClick={() => dispatch(clearCart())}
        >
          Vaciar el carrito
        </button>
      </div>
      <div className="bottom">
        <div className="info">
          {cartItems.map((product) => (
            <CartItem key={product.product} {...product} />
          ))}
          <hr />
        </div>
        <CartSummary />
      </div>
    </Wrapper>
  );
};

export default Cart;
