import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, selectAuthState } from "../features/authSlice";
import { clearCart, createOrder, selectCartState } from "../features/cartSlice";
import Wrapper from "../styles/CheckoutWrapper";
import { formatPrice } from "../utils/helpers";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { userId, userInfo, userLoading } = useSelector(selectAuthState);
  const { totalPrice, shippingFee, cartItems } = useSelector(selectCartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [payment, setPayment] = useState("");

  useEffect(() => {
    dispatch(getSingleUser({ id: userId }));
  }, [dispatch, userId]);

  const handleOrder = () => {
    const orderItems = {
      items: cartItems,
      shippingFee,
    };
    dispatch(createOrder({ orderItems }));
    dispatch(clearCart());
    navigate("/order");
  };

  if (userLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <div className="top">
        <h1 className="title">Finalizar compra</h1>
      </div>
      <div className="middle">
        <div className="left">
          <h3 className="subtitle">
            Datos del comprador e informacion de envio
          </h3>
          <div className="info-item">
            <span>
              <b>Nombre completo: </b>
            </span>
            <span className="fullname">
              {userInfo?.name} {userInfo?.lastName}
            </span>
          </div>
          <div className="info-item">
            <span>
              <b>Direccion de envio: </b>
            </span>
            <span>{userInfo?.address}</span>
            <span>
              {userInfo?.city} - {userInfo?.state}
            </span>
          </div>
          <div className="info-item">
            <span>
              <b>Telefono de contacto: </b>
            </span>
            <span>{userInfo?.phone}</span>
          </div>
          <div className="info-item">
            <span>
              <b>Total a pagar: </b>
            </span>
            <span>{formatPrice(totalPrice + shippingFee)}</span>
          </div>
        </div>
        <div className="right">
          <h3 className="subtitle">Seleccione una forma de pago</h3>
          <form>
            <div className="info-payment">
              <span>
                Elije alguna de las opciones que tenemos disponibles para
                realizar el pago de tu pedido.
              </span>
            </div>
            <div className="payment-item">
              <input
                type="radio"
                id="transferencia"
                name="payment"
                required
                value="transferencia"
                onChange={(e) => setPayment(e.target.value)}
              />
              <label htmlFor="transferencia">
                Transferencia a nuestra cuenta bancaria
              </label>
            </div>
            <div className="payment-item">
              <input
                type="radio"
                id="giro"
                name="payment"
                value="giro"
                onChange={(e) => setPayment(e.target.value)}
              />
              <label htmlFor="giro">
                Giro a traves de Baloto o Servientrega
              </label>
            </div>
            <div className="payment-item">
              <input
                type="radio"
                id="contraentrega"
                name="payment"
                value="contraentrega"
                onChange={(e) => setPayment(e.target.value)}
              />
              <label htmlFor="contraentrega">
                Paga contra entrega cuando recibas tu pedido
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom">
        <button
          className={!payment ? "btn btn-disabled" : "btn"}
          onClick={handleOrder}
        >
          Confirmar pedido
        </button>
        <Link to="/cart" className="btn">
          Volver al carrito
        </Link>
      </div>
    </Wrapper>
  );
};

export default Checkout;
