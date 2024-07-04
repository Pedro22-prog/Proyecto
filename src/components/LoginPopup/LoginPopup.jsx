import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Iniciar Sesion")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Iniciar Sesion" ? <></> : <input type="text" placeholder='Tu nombre' required />}
                    <input type="email" placeholder='Tu correo' required />
                    <input type="password" placeholder='Contraseña' required />
                </div>
                <button>{currState === "Registrate" ? "Crear Cuenta" : "Iniciar Sesion"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Al continuar, acepto los términos de uso y la política de privacidad.</p>
                </div>
                {currState === "Iniciar Sesion"
                    ? <p>Crear una nueva cuenta? <span onClick={() => setCurrState("Registrate")}>Haga click aqui</span></p>
                    : <p>Ya tienes una cuenta? <span onClick={() => setCurrState("Iniciar Sesion")}>Iniciar sesion aqui</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup