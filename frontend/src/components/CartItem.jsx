import Wrapper from "../styles/CartItemWrapper";
import { Add, Remove, DeleteOutline } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { removeCartItem, toggleAmount } from "../features/cartSlice";
import { formatPrice } from "../utils/helpers";
import { FilterColor } from "../styles/SingleProductWrapper";

const CartItem = ({ product, name, image, color, size, amount, price }) => {
  const dispatch = useDispatch();

  const increaseItemCart = (product) => {
    dispatch(toggleAmount({ product, value: "inc" }));
  };

  const decreaseItemCart = (product) => {
    dispatch(toggleAmount({ product, value: "dec" }));
  };

  return (
    <Wrapper>
      <div className="product-detail">
        <img src={image} alt={name} />
        <div className="details">
          <span>
            <b>Articulo:</b> {name}
          </span>
          <span>
            <b>ID:</b> {product}
          </span>
          <span className="color-container">
            <b>Color:</b>
            <FilterColor color={color} />
          </span>
          <span>
            <b>Talla:</b> {size}
          </span>
        </div>
      </div>
      <div className="price-detail">
        <div className="amount-container">
          <Remove onClick={() => decreaseItemCart(product)} />
          <span className="amount">{amount}</span>
          <Add onClick={() => increaseItemCart(product)} />
        </div>
        <div className="price">{formatPrice(price * amount)}</div>
        <div className="delete-item">
          <DeleteOutline onClick={() => dispatch(removeCartItem(product))} />
        </div>
      </div>
    </Wrapper>
  );
};

export default CartItem;
