import Cart from '../components/Cart';

export default function CartPage() {
  console.log('CartPage rendered');

  return (
    <div>
      <a href="/">Главная страница</a>
      <Cart />
    </div>
  );
}
