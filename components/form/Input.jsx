import styled from 'styled-components';

const Input = ({ id, className, type, value, list, onChange }) => {
  return (
    <FoodInput
      id={id}
      className={className}
      type={type}
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

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export default Input;
