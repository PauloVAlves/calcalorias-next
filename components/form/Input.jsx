import styled from 'styled-components';

const Input = ({ id, className, type, value, list, onChange, placeholder }) => {
  return (
    <FoodInput
      id={id}
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      list={list}
      onChange={onChange}
    />
  );
};

const FoodInput = styled.input`
  box-sizing: border-box;
  display: block;
  font-size: 1.1rem;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  outline: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    border: 1px solid #333;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export default Input;
