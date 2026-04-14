import React from 'react';
function ProductCard({ product }) {
    return (
        <div className="card h-100">
            <img src={product.image}
                className="card-img-top "
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
            />

            <div className="card-body">
                <h6>{product.title}</h6>
                <p> Rs. {product.price} </p>
                <p>⭐ {product.rating.rate}</p>
            </div>
        </div>
    );
}

export default ProductCard;