import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShopItems = () => {
  const [itemsList, setItemsList] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/shops/${title}`
        );
        setItemsList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h2>Items</h2>
      {itemsList ? (
        <ul>
          {itemsList.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Nothing here</p>
      )}
    </section>
  );
};

export default ShopItems;
