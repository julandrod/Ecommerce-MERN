import React, { useEffect, useState } from "react";
import {
  deleteUserInfo,
  getAllUsers,
  selectUserState,
} from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import "./userList.css";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";

const UserList = () => {
  const { users } = useSelector(selectUserState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item._id !== id));
    dispatch(deleteUserInfo({ id }));
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Apellido",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row._id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      {users.length > 0 ? (
        <div className="userList">
          <DataGrid
            rows={users}
            columns={columns}
            pagesize={10}
            getRowId={(row) => row._id}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      ) : (
        <h1 className="userListLoading">Loading...</h1>
      )}
    </>
  );
};

export default UserList;
