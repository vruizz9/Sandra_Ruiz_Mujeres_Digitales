import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = ({ product, onAddToCart }) => {
  if (!product) {
    return <div>Seleccione un producto para ver los detalles</div>;
  }

  return (
    <Card className="mb-4">
      {/* Agrega la imagen del producto */}
      <Card.Img variant="top" src={product.image} alt={product.name} />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">${product.price.toFixed(2)}</Card.Subtitle>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button className="btn-details" onClick={() => onAddToCart(product)}>
          Añadir Al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
