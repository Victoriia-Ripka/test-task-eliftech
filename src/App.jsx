import Shops from './pages/Shops/Shops';
import Cart from './pages/Cart/Cart';
import Layout from './components/Layout';
import ShopItems from './components/ShopItems/ShopItems';

const { Suspense } = require('react');
const { Route, Routes } = require('react-router-dom');

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/shops" element={<Shops />}>
            <Route path="/shops/:title" element={<ShopItems />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
