import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cartItems, clearCart }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Carrito</Card.Title>
        <ListGroup variant="flush">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                {item.name} - ${item.price.toFixed(3)}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>Su carrito está vacío</ListGroup.Item>
          )}
        </ListGroup>
        <Card.Footer className="text-muted">
          <strong>Total: ${totalCost.toFixed(3)}</strong>
        </Card.Footer>
        {cartItems.length > 0 && (
          <Button className="btn-cart" onClick={clearCart}>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cart;
