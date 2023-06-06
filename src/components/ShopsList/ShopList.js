import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShopList = () => {
  const [shops, setShops] = useState([]);

  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/shops');
        setShops(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // eslint-disable-next-line no-sequences
  }),
    [];

  return (
    <aside>
      <h2>Shops:</h2>
      {shops ? (
        <ul>
          {shops.map((shop, index) => {
            return (
              <li key={index}>
                <Link to={`${shop.title}`}>{shop.title}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </aside>
  );
};

export default ShopList;
