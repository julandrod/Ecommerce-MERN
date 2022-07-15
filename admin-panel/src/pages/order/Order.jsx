import "./order.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSingleOrder,
  selectOrderState,
  updateOrder,
} from "../../features/orderSlice";
import { getSingleUser, selectUserState } from "../../features/userSlice";
import moment from "moment";
import "moment/locale/es";
import { formatPrice } from "../../utils/helpers";
import InfoItem from "../../components/infoItem/InfoItem";

const Order = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { singleOrder } = useSelector(selectOrderState);
  const { singleUser } = useSelector(selectUserState);

  const [orderState, setOrderState] = useState("");

  moment.locale("es");

  useEffect(() => {
    dispatch(getSingleOrder(orderId));
  }, [dispatch, orderId]);

  useEffect(() => {
    dispatch(getSingleUser(singleOrder.user));
  }, [singleOrder.user, dispatch]);

  const handleUpdate = () => {
    let status = {
      status: orderState,
    };

    dispatch(updateOrder({ id: orderId, status }));
  };

  return (
    <div className="order">
      <div className="orderTitleContainer">
        <h1 className="orderTitle">Orden</h1>
      </div>
      <div className="orderTopSection">
        <div className="orderInfo">
          <div className="orderInfoTitle">
            <h2>Resumen orden:</h2>
          </div>
          <div className="orderInfoSummary">
            <InfoItem name="id:" value={singleOrder._id} />
            <InfoItem name="Estado:" value={singleOrder.status} />
            <InfoItem name="Costo envio:" value={singleOrder.shippingFee} />
            <InfoItem
              name="Subtotal:"
              value={formatPrice(singleOrder.subtotal)}
            />
            <InfoItem name="Total:" value={formatPrice(singleOrder.total)} />
            <InfoItem
              name="Fecha creacion:"
              value={moment(singleOrder.createdAt).format("MMMM D, YYYY")}
            />
          </div>
        </div>
        <div className="orderInfo">
          <div className="orderInfoTitle">
            <h2>Informacion comprador:</h2>
          </div>
          <div className="orderInfoSummary">
            <InfoItem name="id:" value={singleUser._id} />
            <InfoItem
              name="Nombre completo:"
              value={`${singleUser.name} ${singleUser.lastName}`}
            />
            <InfoItem name="Email:" value={singleUser.email} />
            <InfoItem name="Direccion:" value={singleUser.address} />
            <InfoItem
              name="Departamento - Ciudad:"
              value={`${singleUser.state} - ${singleUser.city}`}
            />
            <InfoItem name="Telefono:" value={singleUser.phone} />
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="orderItemsSummary">
          <div className="orderInfoTitle">
            <h2>Articulos</h2>
          </div>
          <div className="tableItemsContainer">
            <table>
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th className="thName">Nombre</th>
                  <th className="thAmount">Cantidad</th>
                  <th className="thPrice">Precio Unidad</th>
                  <th className="thPrice">Precio Total</th>
                </tr>
              </thead>
              <tbody>
                {singleOrder?.orderItems?.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="tableImage"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td className="tdAmount">{item.amount}</td>
                    <td className="tdPrice">{formatPrice(item.price)}</td>
                    <td className="tdPrice">
                      {formatPrice(item.price * item.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="orderState">
          <div className="orderStateTitle">
            <h2>Estado Orden</h2>
          </div>
          <form>
            <div className="orderStateContainer">
              <input
                type="radio"
                id="pending"
                name="orderState"
                required
                value="pending"
                onChange={(e) => setOrderState(e.target.value)}
              />
              <label htmlFor="pending" className="labelStatus pending">
                Pendiente
              </label>
            </div>
            <div className="orderStateContainer">
              <input
                type="radio"
                id="paid"
                name="orderState"
                required
                value="paid"
                onChange={(e) => setOrderState(e.target.value)}
              />
              <label htmlFor="paid" className="labelStatus paid">
                Pagado
              </label>
            </div>
            <div className="orderStateContainer">
              <input
                type="radio"
                id="delivered"
                name="orderState"
                required
                value="delivered"
                onChange={(e) => setOrderState(e.target.value)}
              />
              <label htmlFor="delivered" className="labelStatus delivered">
                Enviado
              </label>
            </div>
            <div className="orderStateContainer">
              <input
                type="radio"
                id="canceled"
                name="orderState"
                required
                value="canceled"
                onChange={(e) => setOrderState(e.target.value)}
              />
              <label htmlFor="paid" className="labelStatus canceled">
                Cancelado
              </label>
            </div>
          </form>
          <div className="buttonUpdateContainer">
            <button
              className={`btn ${orderState ? "" : "btn-disabled"}`}
              onClick={handleUpdate}
            >
              Actualizar estado orden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
