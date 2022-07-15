import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getSingleProduct,
  selectProductState,
} from "../../features/productSlice";
import { formatPrice } from "../../utils/helpers";
import "./product.css";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector(selectProductState);

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/newProduct", { state: { ...singleProduct, id: productId } });
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Producto</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Crear nuevo</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft"></div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={singleProduct.image} alt="" className="productInfoImg" />
            <span className="productName">{singleProduct.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{singleProduct._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Ventas:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Stock:</span>
              <span className="productInfoValue">
                {singleProduct.inventory > 0 ? "Si" : "No"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <div className="productInfoSummary">
          <div className="productInfoItem">
            <span className="productInfoKey">Precio:</span>
            <span className="productInfoValue">
              {formatPrice(singleProduct.price)}
            </span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">Categoria:</span>
            <span className="productInfoValue">{singleProduct.category}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">Colores:</span>
            <span className="productInfoValue">
              {singleProduct?.colors?.map((item) => (
                <span key={item}>{item} </span>
              ))}
            </span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">Tallas:</span>
            <span className="productInfoValue">
              {singleProduct?.sizes?.map((item) => (
                <span key={item}>{item} </span>
              ))}
            </span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">Compañia:</span>
            <span className="productInfoValue">{singleProduct.company}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">Genero:</span>
            <span className="productInfoValue">{singleProduct.gender}</span>
          </div>
        </div>
        <div className="productInfoDescription">
          <div className="productDescription">
            <span className="productInfoKey">Descripcion:</span>
            <span className="productInfoValue">
              {singleProduct.description}
            </span>
          </div>
        </div>
      </div>
      <div className="updateButtonContainer">
        <button className="updateButton" onClick={handleUpdate}>
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default Product;
