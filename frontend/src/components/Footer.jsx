import Wrapper from "../styles/FooterWrapper";
import {
  PhoneOutlined,
  EmailOutlined,
  LocationOnOutlined,
  Twitter,
  Facebook,
  Instagram,
  WhatsApp,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <Wrapper>
      <div className="above">
        <div className="left">
          <h2 className="subtitle">Servicio al cliente</h2>
          <ul>
            <li>Terminos y condiciones</li>
            <li>Guia de tallas</li>
            <li>Envios</li>
            <li>Reembolsos</li>
          </ul>
        </div>
        <div className="center">
          <h2 className="subtitle">Contacto</h2>
          <div className="contact-item">
            <PhoneOutlined />
            <span>+57 300 000 0000</span>
          </div>
          <div className="contact-item">
            <EmailOutlined />
            <span>correo@test.com</span>
          </div>
          <div className="contact-item">
            <LocationOnOutlined />
            <span>Calle 1 #1-1 - Colombia</span>
          </div>
        </div>
        <div className="right">
          <h2 className="subtitle">Boletin</h2>
          <span>No te pierdas ninguna de nuestras promociones.</span>
          <div className="contact-container">
            <input
              className="form-input"
              type="email"
              placeholder="Direccion de correo"
            />
            <button className="btn">Suscribirse</button>
          </div>
        </div>
      </div>
      <div className="below">
        <div className="social-container">
          <Twitter />
          <Facebook />
          <Instagram />
          <WhatsApp />
        </div>
        <div className="sign-container">
          <span>Julandrod © 2022, Colombia</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
