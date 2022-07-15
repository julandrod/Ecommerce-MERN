import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import Wrapper from "../styles/FeaturedItemWrapper";
import { Link } from "react-router-dom";
import {
  addItemToCart,
  countTotals,
  showCartModal,
} from "../features/cartSlice";
import { useDispatch } from "react-redux";

const FeaturedItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(
      addItemToCart({
        name: item.name,
        price: item.price,
        image: item.image,
        amount: 1,
        product: item._id,
        maxStock: item.inventory,
      })
    );
    dispatch(countTotals());
    dispatch(showCartModal());
  };

  return (
    <Wrapper>
      <div className="circle" />
      <img src={item.image} alt={item.name} />
      <div className="info">
        <div className="icon">
          <ShoppingCartOutlined onClick={handleCart} />
        </div>
        <div className="icon">
          <Link to={`/products/${item._id}`} className="router-link">
            <SearchOutlined />
          </Link>
        </div>
        {/* <div className="icon">
          <FavoriteBorderOutlined />
        </div> */}
      </div>
    </Wrapper>
  );
};

export default FeaturedItem;
