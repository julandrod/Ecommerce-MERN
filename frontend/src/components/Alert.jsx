import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearErrorInfo } from "../features/authSlice";

const Alert = ({ type, text }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearErrorInfo());
    }, 3000);
  }, [dispatch]);

  return <div className={`alert alert-${type}`}>{text}</div>;
};

export default Alert;
