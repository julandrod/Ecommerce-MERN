import { Wrapper, FilterColor } from "../styles/SingleProductWrapper";
import { Add, Remove } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, selectProductState } from "../features/productSlice";
import { formatPrice } from "../utils/helpers";
import {
  addItemToCart,
  countTotals,
  showCartModal,
} from "../features/cartSlice";

const SingleProduct = () => {
  const { singleProduct, productLoading } = useSelector(selectProductState);

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(size);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity < singleProduct.inventory ? quantity + 1 : quantity);
    }
  };

  const handleCart = () => {
    dispatch(
      addItemToCart({
        name: singleProduct.name,
        price: singleProduct.price,
        image: singleProduct.image,
        color,
        size,
        amount: quantity,
        product: singleProduct._id,
        maxStock: singleProduct.inventory,
      })
    );
    dispatch(countTotals());
    dispatch(showCartModal());
  };

  if (productLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <div className="img-container">
        <img src={singleProduct.image} alt={singleProduct.name} />
      </div>
      <div className="info-container">
        <h3 className="company-title">{singleProduct.company}</h3>
        <h2 className="title">{singleProduct.name}</h2>
        <span className="category">
          {singleProduct.category} |{" "}
          {singleProduct.gender === "men" ? "Hombre" : "Mujer"}
        </span>
        <span className="price">{formatPrice(singleProduct.price)}</span>
        <p className="description">{singleProduct.description}</p>
        <div className="filter-container">
          <div className="filter">
            <h3>Color</h3>
            {singleProduct.colors?.map((colorItem, idx) => (
              <FilterColor
                key={idx}
                active={colorItem === color}
                color={colorItem}
                onClick={() => setColor(colorItem)}
              />
            ))}
          </div>
          <div className="filter">
            <h3>Talla</h3>
            <select
              className="filter-size"
              onChange={(e) => setSize(e.target.value)}
            >
              <option className="filter-size-option" value="">
                {" "}
                -{" "}
              </option>
              {singleProduct.sizes?.map((sizeItem, idx) => (
                <option
                  key={idx}
                  className="filter-size-option"
                  value={sizeItem}
                >
                  {sizeItem}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="add-container">
          <div className="amount-container">
            <Remove onClick={() => handleQuantity("dec")} />
            <span className="amount">{quantity}</span>
            <Add onClick={() => handleQuantity("inc")} />
          </div>
          <button
            className={`btn ${color && size ? "" : "btn-disabled"}`}
            type="button"
            onClick={handleCart}
          >
            {color && size ? "Agregar al carrito" : "Selecciona un color y talla"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;
