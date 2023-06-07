import React, { useState, useEffect } from 'react';
import {
  ContentContainer,
  CartContainer,
  Label,
  Button,
  TextInput,
  Input,
  Title,
  List,
  Item,
  Text,
} from './Form.styled';
import axios from 'axios';

const url = process.env.BASEURL
  ? process.env.BASEURL
  : 'https://test-task-eliftech.onrender.com/';

const FormComponent = ({ cartList, setCartList }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState([]);
  console.log(cartList, cart);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const queryList = cartList.join(',');
      if (queryList) {
        try {
          const data = await axios.get(`${url}api/user-cart`, {
            params: {
              items: queryList,
            },
          });
          setCart(data.data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartList, cart]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform data validation here
    const { name, email, phone, address } = formData;
    let validationErrors = {};

    if (!name) {
      validationErrors.name = 'Name is required';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!phone) {
      validationErrors.phone = 'Phone number is required';
    }

    if (!address) {
      validationErrors.address = 'Address is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form is valid, submit the data
      console.log(formData);

      setFormData({ name: '', email: '', phone: '', address: '' });
      setErrors({});
      setCartList([]);
      setCart([]);
    }
  };

  const removeItem = id => {
    const updatedCart = cart.filter(item => item._id !== id);
    const updatedCartList = cartList.filter(itemId => itemId !== id);

    setCart(updatedCart);
    setCartList(updatedCartList);
  };

  const handleDecrement = () => {};

  const handleIncrement = () => {};

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <ContentContainer>
          <div>
            <div>
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
              <Label htmlFor="phone">Phone:</Label>
              <Input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div>
              <Label htmlFor="address">Address:</Label>
              <TextInput
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <span className="error">{errors.address}</span>
              )}
            </div>
          </div>
          <CartContainer>
            <Title>Your Cart</Title>
            <List>
              {cart.map((item, index) => {
                return (
                  <Item key={index}>
                    <div>
                      <Text>{item.title}</Text>
                      <Text>${item.price}</Text>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeItem(item._id)}
                      >
                        delete
                      </button>
                      {/* <div>
                        <button type="button" onClick={handleDecrement}>
                          Minus
                        </button>
                        <input type="text" />
                        <button type="button" onClick={handleIncrement}>
                          Add
                        </button>
                      </div> */}
                    </div>
                  </Item>
                );
              })}
            </List>
            <p>
              Total price:{' '}
              {cart.reduce((accumulator, item) => {
                return accumulator + item.price;
              }, 0)}
            </p>
          </CartContainer>
        </ContentContainer>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default FormComponent;
