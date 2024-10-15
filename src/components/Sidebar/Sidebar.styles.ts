import styled from "styled-components";
import { SidebarProps } from "./Sidebar";

export const Container = styled.div<SidebarProps>`
  width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 2px solid #d7d8d8;
  padding: 25px 0;
  background-color: white;
  z-index: 101;
  transition: width 0.3s ease;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 200px;
  }
  
  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 15px;
  font-weight: 500;
  cursor: pointer;

  img {
    margin-top: 5px;
  }
`;

export const CloseButton = styled.div`
  display: none;
  position: absolute;
  top: 5px;
  right: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;
