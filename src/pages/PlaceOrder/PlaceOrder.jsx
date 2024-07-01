import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)


  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title"> Informacion Delivery</p>
          <div className="multi-fields">
            <input type="text" placeholder='Nombre'/>
            <input type="text" placeholder='Apellido'/>
          </div>
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Calle' />
          <div className="multi-fields">
            <input type="text" placeholder='Ciudad'/>
            <input type="text" placeholder='Estado'/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Codigo Postal'/>
            <input type="text" placeholder='Pais'/>
          </div>
           <input type="text" placeholder='Telefono'/>
        </div>
        <div className="place-order-right">
        <div className="car-total">
          <h2>Total Carrito</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()}</b>
            </div>
          </div>
          <button>PROCEDER AL PAGO</button>
        </div>
        </div>
      </form>
      
    </div>
  )
}

export default PlaceOrder
