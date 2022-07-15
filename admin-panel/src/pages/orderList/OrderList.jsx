import "./orderList.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllOrders, selectOrderState } from "../../features/orderSlice";
import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
import "moment/locale/es";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";

const OrderList = () => {
  const dispatch = useDispatch();
  const { orders, orderLoading } = useSelector(selectOrderState);
  console.log(orders);

  moment.locale("es");

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Fecha",
      width: 120,
      renderCell: (params) => {
        return (
          <span>{moment(params.row.createdAt).format("MMMM D, YYYY")}</span>
        );
      },
    },
    {
      field: "total",
      headerName: "Total",
      width: 120,
      renderCell: (params) => {
        return <span>{formatPrice(params.row.total)}</span>;
      },
    },
    {
      field: "shippingFee",
      headerName: "Envio",
      width: 120,
      renderCell: (params) => {
        return <span>{formatPrice(params.row.shippingFee)}</span>;
      },
    },
    {
      field: "orderItems",
      headerName: "# Articulos",
      width: 130,
      renderCell: (params) => {
        return <span>{params.row.orderItems.length}</span>;
      },
    },
    {
      field: "status",
      headerName: "Estado",
      width: 120,
      renderCell: (params) => {
        return (
          <div className={`status ${params.row.status}`}>
            <span>{params.row.status}</span>
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/orders/${params.row._id}`}>
              <button className="actionButton">Ver / Editar</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              // onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  if (orderLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {orders.length > 0 ? (
        <div className="orderList">
          <div className="orderListInfo">
            <h1>Ordenes</h1>
          </div>
          <DataGrid
            className="datagrid"
            rows={orders}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={10}
            checkboxSelection
          />
        </div>
      ) : (
        <h1 className="orderListLoading">No se encontraron ordenes</h1>
      )}
    </>
  );
};

export default OrderList;
