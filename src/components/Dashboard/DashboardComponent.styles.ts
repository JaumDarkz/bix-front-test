import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const WidgetsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`

export const Title = styled.div`
font-size: 32px;
font-weight: 700;
display: flex;
gap: 20px;
align-items: center;
`

export const ChartsContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Chart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  outline: solid 2px #E2E4E4;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const ChartTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`