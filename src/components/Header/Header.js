import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/"><p>MarketPlace</p></Link>
      <nav>
        <ul>
          <li>
            <Link to="/shops">Shops</Link>
          </li>
          <li>
            <Link to="/cart">Shopping Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
