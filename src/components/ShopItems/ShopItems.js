/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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

const ShopItems = () => {
  const [itemsList, setItemsList] = useState([]);
  const [usersItems, setUsersItems] = useState(
    JSON.parse(localStorage.getItem('id')) || []
  );

  const { title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (title) {
          const response = await axios.get(
            `http://localhost:8080/api/shops/${title}`
          );
          setItemsList(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [title]);

  const handleClick = id => {
    usersItems.push(id);
    localStorage.setItem('id', JSON.stringify(usersItems));
  };

  return (
    <Section>
      <Title>Items</Title>
      {itemsList ? (
        <List>
          {itemsList.map((item, index) => {
            const isActive = usersItems.includes(item._id);
            console.log(isActive);
            return (
              <Item key={index}>
                <ItemTitle>{item.title}</ItemTitle>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <Button
                  type="button"
                  isActive={isActive}
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
