import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Roboto", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.3rem;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 2rem;
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 700;
  transition: color 0.2s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.5;
  transition: all 0.3s ease;

  &:hover {
    color: #0070f3;
    border-bottom: 2px solid #0070f3;
  }
`;


const SignUpButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #2e6d2d;
  border: none;
  border-radius: 20px;
  height: 30px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: #06402b;
  }

  @media (max-width: 768px) {
    align-self: center;
    margin-top: 1rem;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer id="about">
      <Logo>FIX ordi</Logo>
      <Hamburger
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <div style={{ transform: menuOpen ? "rotate(45deg)" : "rotate(0)" }} />
        <div style={{ opacity: menuOpen ? 0 : 1 }} />
        <div style={{ transform: menuOpen ? "rotate(-45deg)" : "rotate(0)" }} />
      </Hamburger>
      <Nav isOpen={menuOpen}>
        <NavLink
          as={Link}
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        
        <NavLink
          as={Link}
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          about
        </NavLink>

        <NavLink
          as={Link}
          to="services"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          as={Link}
          to="footer"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
        <SignUpButton>Sign Up</SignUpButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
