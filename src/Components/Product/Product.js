import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider';

const Product = ({ id, title, image, price, rating }) => {

    const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className='product'>

            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>INR </small>
                    <strong>{price}</strong>
                </p>
            </div>

            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (
                    <p className='product__stars'>★</p>
                ))}
            </div>

            <img src={image} alt='' />
            <button>Add to basket</button>

        </div>
    )
}

export default Product
