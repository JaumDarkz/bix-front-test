import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const Layout = styled.div`
  width: 69%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

export const TransactionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const TransactionCard = styled.div<{ type: string }>`
  padding: 16px;
  width: 350px;
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
  text-align: end;
`;

export const Amount = styled.p<{ type: string }>`
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  position: fixed;
  bottom: 30px;
  background: white;
  padding: 10px 0;
  z-index: 1; 
  left: 50%;
  border: 2px solid black;
  border-radius: 20px;

  @media (max-width: 800px) {
    left: 0;
    position: sticky;
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 0 15px;
  color: black;

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    color: #333;
  }
`;

export const FilterContainer = styled.div`
  width: 35%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
