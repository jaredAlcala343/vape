import React from 'react';
import './productcatalog.css';

// Import images directly
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';

const products = [
    { id: 1, name: 'Doble Apple', price: '$340.00', image: image1 },
    { id: 2, name: 'Rasberry Watermelon', price: '$340.00', image: image2 },
    { id: 3, name: 'Blue Razz Ice', price: '$340.00', image: image3 },
    { id: 4, name: 'Candy Rainbow', price: '$340.00', image: image4 },
    { id: 5, name: 'Watermelon Ice', price: '$340.00', image: image5 },
    // Add more products here
];

const ProductCatalog = () => {
    return (
        <section id="products" className="product-catalog">
        <h2>Product Catalog</h2>
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <a
                        href={`https://wa.me/6141975432?text=I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                        className="buy-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Buy
                    </a>
                </div>
            ))}
        </div>
    </section>
    );
};

export default ProductCatalog;
