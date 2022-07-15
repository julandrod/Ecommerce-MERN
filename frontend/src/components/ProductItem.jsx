import { categories } from "../dummyData";
import Wrapper from "../styles/ProductItemWrapper";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@material-ui/icons";
import { formatPrice } from "../utils/helpers";

const ProductItem = ({ product }) => {
  // const testItem = categories[1];

  return (
    <Wrapper>
      <Link to={`/products/${product._id}`} className="link">
        {/* <div className="img-container"> */}
        <img src={product.image} alt={product.name} />
        {/* </div> */}
        <div className="info-container">
          <h4 className="subtitle">{product.name}</h4>
          <p className="category">{product.category}</p>
          <p className="price">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default ProductItem;
