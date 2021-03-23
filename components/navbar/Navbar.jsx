import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>Calcalorias</div>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  background-color: #141738;
  color: #f2506e;
  line-height: 2.6rem;

  .logo {
    cursor: default;
    font-size: 2.3rem;
    padding: 15px 0;
  }
`;

export default Navbar;
