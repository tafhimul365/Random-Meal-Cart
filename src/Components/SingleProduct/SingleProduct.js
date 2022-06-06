import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './SingleProduct.css'

const SingleProduct = ({ product, addToCart }) => {


    return (
        <div className='d-flex col-12  col-md-4'>
            <div className=" p-2  m-2 holder">
                <img className='w-50 m-auto' src={product.strMealThumb} alt="" />
                <h4 >{product.strMeal}</h4>
                <h5> Price: ${product.price}</h5>
                <div className="d-flex justify-content-around">
                    <div onClick={() => addToCart(product)} className="btn btn-success">Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></div>

                </div>
            </div>
        </div >
    );
};

export default SingleProduct;