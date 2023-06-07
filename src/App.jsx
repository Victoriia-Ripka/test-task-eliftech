import Shops from './pages/Shops/Shops';
import Cart from './pages/Cart/Cart';
import Layout from './components/Layout';
import ShopItems from './components/ShopItems/ShopItems';
import React, { useState } from 'react';
const { Suspense } = require('react');
const { Route, Routes } = require('react-router-dom');

export const App = () => {
  const [cartList, setCartList] = useState([]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/shops"
            element={<Shops cartList={cartList} setCartList={setCartList} />}
          >
            <Route
              path="/shops/:title"
              element={
                <ShopItems cartList={cartList} setCartList={setCartList} />
              }
            />
          </Route>
          <Route
            path="/cart"
            element={<Cart cartList={cartList} setCartList={setCartList} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
