import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  background-color: #f9f9f9;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

export const TransactionsGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const TransactionCard = styled.div<{ type: 'deposit' | 'withdrawal' }>`
  padding: 16px;
  width: 500px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${(props) => (props.type === 'deposit' ? '#4CAF50' : '#FF5722')};
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const CardSubtitle = styled.span`
  font-size: 14px;
  color: #777;
`;

export const Amount = styled.p<{ type: 'deposit' | 'withdrawal' }>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.type === 'deposit' ? '#4CAF50' : '#FF5722')};
  margin-bottom: 8px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #555;
`;

export const PaginationContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  overflow-x: scroll;
  z-index: 199;
`;

export const PaginationButton = styled.button<{ isActive: boolean }>`
  background: ${(props) => (props.isActive ? '#333' : '#eee')};
  color: ${(props) => (props.isActive ? '#fff' : '#333')};
  border: none;
  margin: 0 4px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #333;
    color: #fff;
  }
`;
