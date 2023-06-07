import React from 'react';
import FormComponent from 'components/Form/Form';

const Cart = ({ cartList, setCartList }) => {
  return (
    <>
      <FormComponent cartList={cartList} setCartList={setCartList} />
    </>
  );
};

export default Cart;
