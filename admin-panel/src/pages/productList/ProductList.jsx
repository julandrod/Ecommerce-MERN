import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProduct,
  getAllProducts,
  selectProductState,
} from "../../features/productSlice";

import { selectUserState } from "../../features/userSlice";
import { formatPrice } from "../../utils/helpers";
import "./productList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, productLoading } = useSelector(selectProductState);
  const { userInfo } = useSelector(selectUserState);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 220,
    },
    {
      field: "product",
      headerName: "Producto",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.image} alt="" className="productListImg" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Precio",
      width: 120,
      renderCell: (params) => {
        return <span>{formatPrice(params.row.price)}</span>;
      },
    },
    {
      field: "inventory",
      headerName: "Inventario",
      width: 150,
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row._id}`}>
              <button className="productListEdit">Ver / Editar</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  if (productLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {products.length > 0 ? (
        <div className="productList">
          <div className="productListInfo">
            <h1>Productos</h1>
            <Link to="/newProduct">
              <button className="productListCreate">Crear producto</button>
            </Link>
          </div>
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={10}
            checkboxSelection
          />
        </div>
      ) : (
        <h1 className="userListLoading">No se encontraron productos</h1>
      )}
    </>
  );
};

export default ProductList;
