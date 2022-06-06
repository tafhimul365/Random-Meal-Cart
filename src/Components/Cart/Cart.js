import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import RandItem from '../RandItem/RandItem';

const Cart = ({ items, nullCart, randItem, randMeal }) => {
    // console.log(items.length)

    return (
        <div className='cart'>
            <h2>Selected Meals</h2>
            <div className='selected-items'>
                {
                    items.map(item => {
                        return (
                            <div className='item row p-2 d-flex align-items-center' >
                                <img className='img' src={item.strMealThumb} alt="" />
                                <h5 className='col'>{item.strMeal}</h5>
                                <button className='col-2 rounded-pill col-md-2' ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                            </div>)
                    }
                    )


                }
            </div>
            <div >
                <button onClick={randItem} className='cart-button'><h5>Choose one for me</h5></button><br />
                <RandItem randMeal={randMeal}></RandItem>
                <button onClick={nullCart} className='cart-button'><h5>Choose again</h5></button>
            </div>
        </div>
    );
};

export default Cart;