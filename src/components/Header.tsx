import { memo } from 'react';

export default memo(function Header() {
  console.log('Header rendered');
  return (
    <header>
      <h1>Главная страница</h1>
      <a href="/cart">Корзина</a>
    </header>
  );
});
