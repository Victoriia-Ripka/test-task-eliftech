import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  width: 222px;

  &:focus,
  &:hover {
    border: 3px solid #555;
  }
`;

export const TextInput = styled.textarea`
  width: 222px;
  height: 70px;
  padding: 12px 20px;
  margin: 8px 0;
  resize: none;

  &:focus,
  &:hover {
    border: 3px solid #555;
  }
`;

export const CartContainer = styled.div`
  width: 30vw;
  height: 428px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
`;

export const List = styled.ul`
  width: 100%;
  height: 260px;
  overflow: auto;
`;

export const Item = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Text = styled.p``;

export const Button = styled.button`
  background-color: #04aa6d;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  display: block;
  margin: 30px auto 50px;

  transition: all 0.3s ease;

  &:focus,
  &:hover {
    color: #04aa6d;
    background-color: white;
    border: 1px solid #04aa6d;
  }
`;
