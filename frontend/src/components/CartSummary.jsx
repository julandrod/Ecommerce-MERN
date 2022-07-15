import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuthState } from "../features/authSlice";
import { selectCartState } from "../features/cartSlice";
import Wrapper from "../styles/CartSummaryWrapper";
import { formatPrice } from "../utils/helpers";

const CartSummary = () => {
  const { totalPrice, shippingFee } = useSelector(selectCartState);
  const { userId } = useSelector(selectAuthState);

  return (
    <Wrapper>
      <h2 className="title">Resumen de la orden</h2>
      <div className="summary-item">
        <span className="summary-item-title">Subtotal</span>
        <span>{formatPrice(totalPrice)}</span>
      </div>
      <div className="summary-item">
        <span className="summary-item-title">Costo de envio</span>
        <span>{formatPrice(shippingFee)}</span>
      </div>
      <div className="summary-item">
        <span className="summary-item-title">Descuento</span>
        <span></span>
      </div>
      <div className="summary-item">
        <span className="summary-item-title">Costo total</span>
        <span>{formatPrice(totalPrice + shippingFee)}</span>
      </div>
      <div className="summary-item">
        {userId ? (
          <Link to="/checkout" className="btn checkout-btn">
            Proceder al pago
          </Link>
        ) : (
          <Link to="/login" className="btn checkout-btn">
            Ingresa / Nuevo usuario
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

export default CartSummary;
