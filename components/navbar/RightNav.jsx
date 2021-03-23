import Link from 'next/link';
import styled from 'styled-components';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/sobre'>Sobre</Link>
      </li>
      <li>
        <Link href='/contato'>Contato</Link>
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.5rem;

  li {
    padding: 18px 10px;
  }

  a {
    text-decoration: none;
    color: #f2506e;
    transition: all 0.5s ease-in-out;
  }

  a:hover {
    transition: all 0.5s ease-in-out;
    color: #fff;
  }

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    font-size: 2rem;

    li {
      color: #fff;
    }
  }
`;

export default RightNav;
