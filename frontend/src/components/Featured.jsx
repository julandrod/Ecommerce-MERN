import { popularProducts } from "../dummyData";
import Wrapper from "../styles/Featured";
import FeaturedItem from "./FeaturedItem";
import { useSelector } from "react-redux";
import { selectProductState } from "../features/productSlice";

const Featured = () => {
  const { products } = useSelector(selectProductState);

  const featuredProducts = products.filter(
    (product) => product.featured === true
  );

  return (
    <Wrapper>
      <h1 className="title">Nuestros productos destacados</h1>
      <div className="featured-container">
        {featuredProducts.map((item) => (
          <FeaturedItem key={item._id} item={item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Featured;
