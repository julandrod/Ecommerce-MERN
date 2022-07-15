import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupUser, selectAuthState } from "../features/authSlice";
import Wrapper from "../styles/LoginWrapper";
import { Alert, FormInput, SelectOptionItem } from "../components";
import { useNavigate } from "react-router-dom";
import { departamentos } from "../utils/departamentos";

const Login = () => {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    state: departamentos[0].departamento,
    city: "",
    phone: "",
    isLogin: true,
  });
  let alert = {
    type: "",
    text: "",
  };

  // Del archivo departamentos.js obtengo la lista de departamentos y ciudades
  const departamentosSelect = departamentos.map((item) => item.departamento);
  const ciudadesSelect = departamentos.filter(
    (item) => item.departamento === values.state
  )[0].ciudades;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorInfo, userError, userLoading, userInfo } =
    useSelector(selectAuthState);

  const toggleLogin = () => {
    setValues({ ...values, isLogin: !values.isLogin });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      lastName,
      email,
      password,
      address,
      state,
      city,
      phone,
      isLogin,
    } = values;
    const dataUser = {
      name,
      lastName,
      email,
      password,
      address,
      state,
      city,
      phone,
    };

    if (isLogin) {
      dispatch(setupUser({ dataUser, endPoint: "login" }));
    } else {
      dispatch(setupUser({ dataUser, endPoint: "register" }));
    }
  };

  if (userError) {
    alert.type = "danger";
    alert.text = errorInfo;
  }

  if (userInfo) {
    alert.type = "success";
    alert.text =
      (values.isLogin ? "!Ingreso exitoso!" : "!Usuario creado!") +
      " Regresando a la tienda";
  }
  useEffect(() => {
    if (userInfo) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [navigate, userInfo]);

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h3>{values.isLogin ? "Ingresar" : "Registrarse"}</h3>
        {(userError || userInfo) && (
          <Alert type={alert.type} text={alert.text} />
        )}
        {!values.isLogin && (
          <>
            <FormInput
              type="text"
              value={values.name}
              name="name"
              labelText="Nombre"
              placeholder="nombre"
              handleChange={handleChange}
            />
            <FormInput
              type="text"
              value={values.lastName}
              name="lastName"
              labelText="Apellido"
              placeholder="apellido"
              handleChange={handleChange}
            />
            <FormInput
              type="text"
              value={values.address}
              name="address"
              labelText="Direccion"
              placeholder="calle 1 #1-1"
              handleChange={handleChange}
            />
            <SelectOptionItem
              name="state"
              labelText="Departamento"
              items={departamentosSelect}
              handleChange={handleChange}
            />
            <SelectOptionItem
              name="city"
              labelText="Ciudad"
              items={ciudadesSelect}
              handleChange={handleChange}
            />
            <FormInput
              type="number"
              value={values.phone}
              name="phone"
              labelText="Telefono"
              placeholder="1234567890"
              handleChange={handleChange}
            />
          </>
        )}
        <FormInput
          type="email"
          name="email"
          value={values.email}
          placeholder="email"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          value={values.password}
          name="password"
          placeholder="password"
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={userLoading}>
          {values.isLogin ? "Ingresar" : "Crear cuenta"}
        </button>
        <p>
          {values.isLogin ? "¿Aun no eres miembro?" : "Ya tienes una cuenta"}
          <button type="button" className="login-btn" onClick={toggleLogin}>
            {values.isLogin ? "Crear cuenta" : "Ingresar"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
