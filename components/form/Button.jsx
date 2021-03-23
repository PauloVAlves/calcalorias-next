import React from 'react';
import styled from 'styled-components';

const Submit = ({ buttonName, onSubmit }) => {
  return <Button onClick={onSubmit}>{buttonName}</Button>;
};

const Button = styled.button`
  cursor: pointer;
  background-color: #0161e8;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  padding: 10px 40px;
  outline: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: #290cff;
  }

  @media (max-width: 900px) {
    width: 80%;
    font-size: 1.4rem;
    margin: 10px auto;
  }
`;

export default Submit;
