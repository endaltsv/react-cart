import { useContext } from 'react';
import { ItemType } from '../item-type';
import { CartActionsContext, CartItemsContext } from '../context/CartContext';

interface ItemProps {
  items: ItemType[];
}

const Item = function Item({ items }: ItemProps) {
  const { addItemToCart } = useContext(CartActionsContext);
  const cartItems = useContext(CartItemsContext);
  console.log('Items rendered');

  return (
    <div>
      {items.map((item) => {
        const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

        return (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => addItemToCart(item)}>Купить</button>{' '}
            <span>
              {cartItem && cartItem.quantity > 0
                ? `В корзине: ${cartItem.quantity}`
                : null}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
