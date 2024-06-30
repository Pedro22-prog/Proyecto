import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo_unimet} alt="" />
            <p>Redes Sociales</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src="{assets.instagram_icon}" alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Comapañia</h2>
            <ul>
                <li>Home</li>
                <li>Nostros</li>
                <li>Informacion</li>
                <li>Privacidad</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contactanos</h2>
            <ul>
                <li>Número Contacto: +58 424-2643139</li>
                <li>Direccion: Nivel Feria, Ditribuidor metropolitano Caracas, 1060, Miranda</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright: 2024 @ Pepperonis - Todos los derechos reservados</p>
    </div>
  )
}

export default Footer
