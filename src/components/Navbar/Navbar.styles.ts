import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #d7d8d8;
  padding: 0 25px;
  background-color: white;
  z-index: 100;
  transition: width 0.3s ease, margin-left 0.3s ease;
`;

export const NavbarOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  border-radius: 100px;
  margin-left: auto;

  img {
    border-radius: 100px;
    margin-top: 5px;
  }

  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background: #d7d8d8;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;