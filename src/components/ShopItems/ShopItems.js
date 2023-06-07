/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Section,
  Title,
  List,
  Item,
  ItemTitle,
  Button,
} from './ShopItems.styled';

const url = process.env.BASEURL
  ? process.env.BASEURL
  : 'https://test-task-eliftech.onrender.com/';

const ShopItems = ({ cartList, setCartList }) => {
  const [itemsList, setItemsList] = React.useState([]);
  const { title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (title) {
          const response = await axios.get(`${url}api/shops/${title}`);
          setItemsList(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  const handleClick = id => {
    setCartList(prev => [...prev, id]);
  };

  return (
    <Section>
      <Title>Items</Title>
      {itemsList ? (
        <List>
          {itemsList.map((item, index) => {
            return (
              <Item key={index}>
                <ItemTitle>{item.title}</ItemTitle>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <Button
                  type="button"
                  disabled={cartList && cartList.includes(item._id)}
                  onClick={() => handleClick(item._id)}
                >
                  Add to Cart
                </Button>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>Nothing here</p>
      )}
    </Section>
  );
};

export default ShopItems;
