import { ItemType } from '../item-type';
import Item from '../components/Item';
import Header from '../components/Header';

function HomePage() {
  console.log('HomePage rendered');

  const items: ItemType[] = [
    { id: 1, name: 'Подушка', price: 1300 },
    { id: 2, name: 'Стул', price: 5000 },
    { id: 3, name: 'Стол', price: 25000 },
  ];

  return (
    <>
      <Header />
      <div>
        <Item items={items} />
      </div>
    </>
  );
}

export default HomePage;
