import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { departamentos } from "../../departamentos";
import { selectUserState, setupUser } from "../../features/userSlice";
import "./newUser.css";

const NewUser = () => {
  const [dataUser, setDataUser] = useState({
    state: departamentos[0].departamento,
    city: "",
  });
  const { userInfo } = useSelector(selectUserState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const departamentosSelect = departamentos.map((item) => item.departamento);
  const ciudadesSelect = departamentos.filter(
    (item) => item.departamento === dataUser.state
  )[0].ciudades;

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setupUser({ dataUser, endPoint: "/register" }));

    if (userInfo) {
      navigate("/users");
    }
  };

  const handleChange = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nuevo Usuario</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="John"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Apellido</label>
          <input
            type="text"
            placeholder="Smith"
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@email.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Telefono</label>
          <input
            type="text"
            placeholder="+1 234 5678"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Direccion</label>
          <input
            type="text"
            placeholder="calle 1 #1-1"
            name="address"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <label>Departamento</label>
          <select
            name="state"
            id="state"
            className="newUserSelect"
            onChange={handleChange}
          >
            {departamentosSelect.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="newUserItem">
          <label>Ciudad</label>
          <select
            name="city"
            id="city"
            className="newUserSelect"
            onChange={handleChange}
          >
            {ciudadesSelect.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <button className="newUserButton" onClick={handleSubmit}>
          Crear usuario
        </button>
      </form>
    </div>
  );
};

export default NewUser;
