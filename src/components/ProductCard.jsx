import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-icon">{product.icon}</div>
      </div>
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <span className="product-stock">
            {product.inStock ? '✓ En stock' : '✗ Agotado'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
