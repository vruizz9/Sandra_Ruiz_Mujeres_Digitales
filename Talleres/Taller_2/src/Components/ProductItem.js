const ProductItem = ({ name, price, description, onViewDetails }) => {
    return (
      <div className="product-item">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price.toFixed(3)}</p>
        <button className="btn-details" onClick={onViewDetails}>
          Ver Detalles
        </button>
      </div>
    )
}

export default ProductItem;