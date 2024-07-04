import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  console.log("FoodItem - Received id:", id); // Agregar log para verificar id

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] || cartItems[id] === 0 ? (
          <img className='add' onClick={() => { 
            addToCart(id); 
            console.log("Added item:", id); 
          }} src={assets.add_icon_white} alt="" />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => { 
              removeFromCart(id); 
              console.log("Removed item:", id); 
            }} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => { 
              addToCart(id); 
              console.log("Added item:", id); 
            }} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>
      <p className='food-item-description'>{description}</p>
      <p className='food-item-price'>${price}</p>
    </div>
  );
}

export default FoodItem;

