import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  HouseOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getSingleUser,
  selectUserState,
  updateUserInfo,
} from "../../features/userSlice";
import moment from "moment";
import "moment/locale/es";
import "./user.css";

const User = () => {
  const { singleUser } = useSelector(selectUserState);
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState("");

  const dispatch = useDispatch();

  moment.locale("es");

  useEffect(() => {
    dispatch(getSingleUser(userId));
  }, [dispatch, userId]);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    dispatch(updateUserInfo({ id: userId, userInfo }));
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Usuario</h1>
        <Link to="/newUser">
          <button className="userAddButton">Crear nuevo</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://www.slotcharter.net/wp-content/uploads/2020/02/no-avatar.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{`${singleUser?.name} ${singleUser?.lastName}`}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalles de la cuenta</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{singleUser?.name}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">
                {moment(singleUser.createdAt).format("MM/DD/YYYY")}
              </span>
            </div>
            <span className="userShowTitle">Informacion de contacto</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{singleUser.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{singleUser?.email}</span>
            </div>
            <div className="userShowInfo">
              <HouseOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">{singleUser?.address}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{`${singleUser.state} | ${singleUser.city}`}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Nombre</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder={singleUser?.name}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Apellido</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  placeholder={singleUser?.lastName}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder={singleUser?.email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Telefono</label>
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  placeholder={singleUser?.phone}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Direccion</label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  placeholder={singleUser?.address}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              
              <button className="userUpdateButton" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
