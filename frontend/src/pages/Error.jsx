import { Link } from "react-router-dom"
import img from "../assets/images/error.jpg"
import Wrapper from "../styles/ErrorWrapper"

const Error = () => {
  return (
    <Wrapper className="full-page">
        <img src={img} alt="Not found" />
        <h3>La pagina no se encuentra!</h3>
        <p>No podemos encontrar la pagina que estas buscando.</p>
        <Link to="/">Regresar a la pagina principal</Link>
    </Wrapper>
  )
}

export default Error