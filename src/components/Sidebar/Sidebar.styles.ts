import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 2px solid #d7d8d8;
  padding: 25px 0 25px 0;
  background-color: white;
  z-index: 100;
`

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Option = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 15px;
  font-weight: 600;

  transition: 0.6s;

  img {
    margin-top: 5px;
  }

  &:hover {
    cursor: pointer;
    background: black;
    color: white;
    
    img {
      transition: 0s;
      filter: brightness(0) invert(1);
    }
  }
`