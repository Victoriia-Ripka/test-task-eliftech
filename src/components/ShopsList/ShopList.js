import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Aside, Title, List, Item } from './ShopList.styled';

const url = process.env.BASEURL
  ? process.env.BASEURL
  : 'https://test-task-eliftech.onrender.com/';

const ShopList = () => {
  const [shops, setShops] = useState([]);

  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}api/shops`);
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
    <Aside>
      <Title>Shops:</Title>
      {shops ? (
        <List>
          {shops.map((shop, index) => {
            return (
              <Item key={index}>
                <Link to={`${shop.title}`}>{shop.title}</Link>
              </Item>
            );
          })}
        </List>
      ) : (
        <></>
      )}
    </Aside>
  );
};

export default ShopList;
