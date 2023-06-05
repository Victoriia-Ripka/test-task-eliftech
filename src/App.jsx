const { Suspense } = require('react');
const { Route, Routes } = require('react-router-dom');

export const  App = () => {
  return (
    <Suspense>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route path="/shops" element={<Shops />} />
          <Route path="/shops/:title" element={<ShopItems />} />
          <Route path="/cart" element={<Cart />} />
        </Route> */}
      </Routes>
    </Suspense>
  );
}
