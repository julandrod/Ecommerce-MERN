import { ProductItem } from "../components";
import Wrapper from "../styles/ProductListWrapper";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, selectProductState } from "../features/productSlice";
import { useEffect } from "react";
import { selectFilterState, updateFilters } from "../features/filtersSlice";

const ProductList = ({ gender }) => {
  const { products, countProducts, categories } =
    useSelector(selectProductState);
  const filters = useSelector(selectFilterState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts({ ...filters, gender }));
  }, [dispatch, filters, gender]);

  const handleFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(updateFilters({ name, value, gender }));
  };

  return (
    <Wrapper>
      <h1 className="title">Todos los productos</h1>
      <div className="filters-container">
        <div className="filter-item">
          <h3>Filtrar por</h3>
          <select
            className="filter-select"
            name="category"
            value={filters.category}
            onChange={handleFilters}
          >
            {categories.map((category, idx) => (
              <option className="filter-item-option" key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-item">
          <h3>Filtrar por</h3>
          <select className="filter-select">
            <option className="filter-item-option">9</option>
            <option className="filter-item-option">9.5</option>
            <option className="filter-item-option">10</option>
            <option className="filter-item-option">10.5</option>
            <option className="filter-item-option">11</option>
            <option className="filter-item-option">11.5</option>
            <option className="filter-item-option">12</option>
          </select>
        </div>
        <div className="filter-item">
          <h3>Ordenar por</h3>
          <select
            className="filter-select"
            name="sort"
            onChange={handleFilters}
          >
            <option className="filter-item-option"> - </option>
            <option className="filter-item-option" value="lowest">
              Precio, menor a mayor
            </option>
            <option className="filter-item-option" value="highest">
              Precio, mayor a menor
            </option>
            <option className="filter-item-option" value="a-z">
              Alfabeticamente, A-Z
            </option>
            <option className="filter-item-option" value="z-a">
              Alfabeticamente, Z-A
            </option>
          </select>
        </div>
        <div className="quantity-items">
          <span>{countProducts} articulos</span>
        </div>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductList;
