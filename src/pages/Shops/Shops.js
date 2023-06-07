import ShopItems from 'components/ShopItems/ShopItems';
import ShopList from 'components/ShopsList/ShopList';
import React from 'react';

const Shops = ({ cartList, setCartList }) => {
  return (
    <div>
      <ShopList></ShopList>
      <ShopItems  cartList={cartList} setCartList={setCartList} ></ShopItems>
    </div>
  );
};

export default Shops;
