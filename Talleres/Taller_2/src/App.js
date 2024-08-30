import React, { useState } from 'react';
import MyNavbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const products = [
  { id: 1, name: "Crema Facial Hidratante", price: 34.99, description: "Crema hidratante para el rostro con ácido hialurónico.", image: "https://m.media-amazon.com/images/I/71C6yykSYsL._AC_SL1500_.jpg" },
  { id: 2, name: "Sérum Antiarrugas", price: 49.99, description: "Sérum concentrado con retinol y péptidos para reducir arrugas.", image: "https://media.revistavanityfair.es/photos/61dc69167a73c0abdc133999/master/w_1600%2Cc_limit/institut%2520esthederm.jpeg"},
  { id: 3, name: "Máscara de Pestañas Voluminizadora", price: 24.99, description: "Máscara resistente al agua que añade volumen a las pestañas.", image: "https://images.yampi.me/assets/stores/alltenz2/uploads/images/rimel-4d-alongador-a-prova-dagua-01-64d8d210bdb2a-large.jpg"},
  { id: 4, name: "Exfoliante Corporal de Azúcar", price: 29.99, description: "Exfoliante con cristales de azúcar y aceites esenciales para una piel suave.", image: "https://media.zid.store/thumbs/f9e6dbda-548f-422b-a17e-accfc1874086/3a46abc8-ba7b-4d00-a770-e546cd0f8eea-thumbnail-770x770-70.jpg"},
  { id: 5, name: "Base de Maquillaje Líquida", price: 39.99, description: "Base líquida con cobertura completa y acabado mate.", image: "https://m.media-amazon.com/images/I/41Rw4+4ryIL._SL500_.jpg"},
  { id: 6, name: "Gloss Labial Hidratante", price: 15.99, description: "Gloss labial con fórmula hidratante y de alto brillo.", image: "https://aws.glamour.es/prod/designs/v1/assets/850x962/701121.png"}
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <MyNavbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <ProductList products={products} onViewDetails={handleViewDetails} />
          </div>
          <div className="col-md-4">
            <ProductDetails product={selectedProduct} onAddToCart={handleAddToCart} />
            <Cart cartItems={cartItems} />
            <button className="btn btn-danger mt-3" onClick={clearCart}>
              Limpiar Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}