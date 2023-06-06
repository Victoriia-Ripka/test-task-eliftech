import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, List } from './Header.styled';

const Header = () => {

  return (
    <HeaderContainer>
      <Link to="/">
        <p>MarketPlace</p>
      </Link>
      <nav>
        <List>
          <li>
            <Link to="/shops">Shops</Link>
          </li>
          <li>
            <Link to="/cart">Shopping Cart</Link>
          </li>
        </List>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
