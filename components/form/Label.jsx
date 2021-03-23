import styled from 'styled-components';

const Label = ({ labelName, labelFor }) => {
  return <StyledLabel htmlFor={labelFor}>{labelName}</StyledLabel>;
};

const StyledLabel = styled.label``;

export default Label;
