import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <il onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</il>
        <il onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</il>
        <il onClick={()=>setMenu("nostros")} className={menu==="nostros"?"active":""}>Nostros</il>
        <il onClick={()=>setMenu("informacion")} className={menu==="informacion"?"active":""}>Informacion</il>
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
