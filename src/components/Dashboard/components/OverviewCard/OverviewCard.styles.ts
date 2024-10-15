import styled from "styled-components";

export const OverviewCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  outline: solid 2px #E2E4E4;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const Title = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`

export const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`