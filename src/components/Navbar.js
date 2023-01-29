import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        about
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        contact
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  a {
    position: relative;
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
    margin: 20px;
    font-size: 22px;
    letter-spacing: 1px;
    opacity: 0.7;
    transition: 0.3s ease-out;
    &:hover {
      letter-spacing: 3px;
      opacity: 1;
    }
    &.active {
      letter-spacing: 3px;
      opacity: 1;
      color: var(--header);
    }
  }
  @media (max-width: 415px) {
    a {
      font-size: 18px;
    }
  }
`;

export default Navbar;
