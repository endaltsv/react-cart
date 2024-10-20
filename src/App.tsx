import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

function App() {
  console.log('App rendered');
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
