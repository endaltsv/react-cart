// Cart.tsx
import { useContext } from 'react';
import { CartItemsContext, CartActionsContext } from '../context/CartContext';

export default function Cart() {
  console.log('Cart rendered');

  const cartItems = useContext(CartItemsContext);
  const { removeItemFromCart, removeCart } = useContext(CartActionsContext);

  return (
    <div>
      <span>Корзина:</span>
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>Название: {item.name}</span>
          <span>Цена: {item.price}</span>
          <span>Количество: {item.quantity}</span>
          <button onClick={() => removeItemFromCart(item)}>
            Удалить товар
          </button>
        </div>
      ))}
      Итого:{' '}
      {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      <button onClick={() => removeCart()}>Очистить корзину</button>
    </div>
  );
}
