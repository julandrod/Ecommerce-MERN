import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createProduct,
  selectProductState,
  updateProduct,
} from "../../features/productSlice";
import "./newProduct.css";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productError } = useSelector(selectProductState);

  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    company: "",
    price: "",
    category: "",
    inventory: "",
    gender: "",
  });
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [file, setFile] = useState(null);

  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setInputs((prev) => ({
        ...prev,
        name: state.name,
        description: state.description,
        company: state.company,
        price: state.price,
        category: state.category,
        inventory: state.inventory,
        gender: state.gender,
      }));
      setColors(state.colors);
      setSizes(state.sizes);
      setFile(state.image);
    }
  }, [state]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleColorsAndSize = (e) => {
    let data = e.target.value.split(",").map((item) => item.trim());

    if (e.target.name === "color") {
      setColors(data);
    } else if (e.target.name === "size") {
      setSizes(data);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    let price = parseInt(inputs.price);
    let inventory = parseInt(inputs.inventory);

    setInputs({ ...inputs, price, inventory });

    const productInfo = {
      ...inputs,
      colors,
      sizes,
    };

    if (state) {
      dispatch(
        updateProduct({ productInfo: { ...productInfo, file }, id: state.id })
      );
    } else {
      if (file) {
        dispatch(createProduct({ productInfo, file }));
      } else {
        dispatch(createProduct({ productInfo }));
      }
    }

    if (!productError) {
      navigate("/products");
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nuevo Producto</h1>
      <div className="formContainer">
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Imagen</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={inputs?.name}
              placeholder="Nombre del producto"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Descripcion</label>
            <textarea
              type="text"
              name="description"
              value={inputs?.description}
              rows="5"
              placeholder="Descripcion"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Compañia</label>
            <input
              type="text"
              name="company"
              value={inputs?.company}
              placeholder="Compañia"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Precio</label>
            <input
              type="number"
              name="price"
              value={inputs.price}
              placeholder="Precio"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Categoria</label>
            <input
              type="text"
              name="category"
              value={inputs.category}
              placeholder="Categoria"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Colores</label>
            <input
              type="text"
              name="color"
              value={colors}
              placeholder="Colores en ingles"
              onChange={handleColorsAndSize}
            />
          </div>
          <div className="addProductItem">
            <label>Tallas</label>
            <input
              type="text"
              name="size"
              value={sizes}
              placeholder="9.5, 10, 11, etc"
              onChange={handleColorsAndSize}
            />
          </div>
          <div className="addProductItem">
            <label>Inventario</label>
            <input
              type="number"
              name="inventory"
              value={inputs.inventory}
              placeholder="Inventario"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genero</label>
            <select name="gender" value={inputs.gender} onChange={handleChange}>
              <option> - </option>
              <option value="men">Masculino</option>
              <option value="women">Femenino</option>
            </select>
          </div>
          <button className="addProductButton" onClick={handleClick}>
            {state ? "Actualizar" : "Crear"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
