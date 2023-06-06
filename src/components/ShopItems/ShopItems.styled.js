import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 50px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: -15px;
`;

export const Item = styled.li`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 18px;
  margin: 15px;
`;

export const ItemTitle = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: 2px solid orange;
  border-radius: 18px;
  height: 36px;
  width: 120px;
  margin-top: 10px;
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? 'white' : 'green')}

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: orange;
    color: white;
  }
`;
