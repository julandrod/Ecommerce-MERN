import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartState } from "../features/cartSlice";
import Wrapper from "../styles/OrderWrapper";
import { formatPrice } from "../utils/helpers";

const Order = () => {
  const { order } = useSelector(selectCartState);

  return (
    <Wrapper>
      <div className="top">
        <h1 className="title">Resumen de tu compra</h1>
        <span>
          Muchas gracias por confiar en nosotros para tus compras, tu orden{" "}
          <b>#{order._id}</b> esta siendo procesada y a continuacion veras un
          resumen de tu pedido:
        </span>
      </div>
      <div className="bottom">
        <h3 className="subtitle">Articulos</h3>
        {order?.orderItems?.map((item) => (
          <div className="order-item-summary" key={item._id}>
            <img src={item.image} alt={item.name} />
            <div className="order-item-info">
              <span>
                <b>Articulo:</b> {item.name}
              </span>
              <span>
                <b>Precio unitario:</b> {formatPrice(item.price)}
              </span>
              <span>
                <b>Cantidad:</b> {item.amount}
              </span>
            </div>
          </div>
        ))}
        <div className="order-item-total">
          <span>
            <b>Valor total:</b> {formatPrice(order?.total)}
          </span>
        </div>
      </div>
      <div className="btn-container">
        <Link to="/products/todo" className="btn">
          Volver a la tienda
        </Link>
      </div>
    </Wrapper>
  );
};

export default Order;
