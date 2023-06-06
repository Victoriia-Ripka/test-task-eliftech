import React, { useState } from 'react';
import {
  ContentContainer,
  CartContainer,
  Label,
  Button,
  TextInput,
  Input,
  Title,
} from './Form.styled';

const FormComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const [usersItems, setUsersItems] = useState(
    JSON.parse(localStorage.getItem('id')) || []
  );

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
      // Reset the form
      setFormData({ name: '', email: '', phone: '', address: '' });
      setErrors({});
    }
  };

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
            <ul>
              {usersItems.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                  </li>
                );
              })}
            </ul>
            <p>Total price: {}</p>
          </CartContainer>
        </ContentContainer>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default FormComponent;
