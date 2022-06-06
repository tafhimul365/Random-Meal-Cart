import React, { useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Allproducts.css'


const Allproducts = props => {
    const [products, setProducts] = useState([])
    useState(() => {
        fetch('productDB.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div>
            <div className='row '>
                {
                    products.map(pd => <SingleProduct addToCart={props.addToCart} key={pd.idMeal} product={pd}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Allproducts;