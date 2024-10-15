import styled from 'styled-components';

export const BalanceCardContainer = styled.div`
  width: 100%;
  max-width: 180px;
  min-width: fit-content;
  height: 102px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  outline: solid 2px #E2E4E4;
  border-radius: 12px;
  padding: 10px;
`;

export const InfoTitle = styled.p`
  font-size: 12px;
  color: #525866;
`;

export const Value = styled.div`
  font-weight: 600;  
  font-size: 18px;
  color: #0E121B;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  position: relative;
  cursor: default;
`;

export const Tooltip = styled.div`
  position: absolute;
  padding: 5px 10px;
  background: white;
  margin-top: 20px;
  margin-left: -8px;
  color: black;
  font-size: 14px;
  border-radius: 12px;
  border: 2px solid #E2E4E4;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: 1s;
`;
