import React from 'react';
import './RandItem.css'

const RandItem = ({ randMeal }) => {
    if (randMeal) {
        return (
            <div className='item-ran row m-2 p-2 d-flex align-items-center' >
                <img className='img-ran' src={randMeal.strMealThumb} alt='' />
                <h5 className='col'>{randMeal.strMeal}</h5>
            </div>
        );
    }
    else {
        return (
            <div>

            </div>
        );
    }



};

export default RandItem;