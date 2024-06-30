import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("nostros")} className={menu==="nostros"?"active":""}>Nostros</li>
        <li onClick={()=>setMenu("informacion")} className={menu==="informacion"?"active":""}>Informacion</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button>Registrarse</button>
      </div>
    </div>
  )
}

export default Navbar
