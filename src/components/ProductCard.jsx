import React from 'react';


const ProductCard = ({product}) => {
    return (
        <div className="productCard__wrapper">
            <img src={product.image} className alt="productCard-img" />
        </div>
    )
}

export default ProductCard;
