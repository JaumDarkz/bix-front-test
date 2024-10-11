import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: calc(100% - 200px);
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px solid #d7d8d8;
  margin: 0 0 0 200px;
  padding: 0px 25px;
`
export const NavbarOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 10px;
  border-radius: 100px;

  img {
    border-radius: 100px;
    margin-top: 5px;
  }

  transition: 0.5s;
  
  &:hover {
    cursor: pointer;
    background: #d7d8d8;
  }
`