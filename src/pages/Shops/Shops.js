import ShopItems from 'components/ShopItems/ShopItems';
import ShopList from 'components/ShopsList/ShopList';
import React from 'react';

const Shops = () => {
  return (
    <div>
      <ShopList></ShopList>
      <ShopItems></ShopItems>
    </div>
  );
};

export default Shops;
