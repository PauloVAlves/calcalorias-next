import styled from 'styled-components';

const NamesList = ({ names }) => {
  return (
    <Datalist className='name-list' id='names-list'>
      {names.map((food) => (
        <Option key={food.id}>{food.name}</Option>
      ))}
    </Datalist>
  );
};

const Datalist = styled.datalist`
  position: absolute;
  background-color: lightgrey;
  font-family: sans-serif;
  font-size: 0.8rem;
`;
const Option = styled.option`
  background-color: #bbb;
  padding: 4px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default NamesList;
