"use client";
import { useState } from 'react';
import { transactionsData } from '@/lib/constants';
import { useFilter } from '../../contexts/FilterContext';
import FilterComponent from '../Filters/FilterComponent';
import {
  Container,
  TransactionsGrid,
  TransactionCard,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Amount,
  CardFooter,
  PaginationContainer,
  ArrowButton,
  Layout,
  FilterContainer,
} from './TransactionsPageComponent.styles';
import { Transaction } from '@/lib/dto';

const TransactionsPageComponent = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
 
  const { filteredData } = useFilter();
  const transactions: Transaction[] = transactionsData.map((transaction: Transaction) => ({
    ...transaction,
    transaction_type: transaction.transaction_type as 'deposit' | 'withdrawal',
  }));
  
  const filteredTransactions: Transaction[] = filteredData && filteredData.length > 0 ? filteredData : transactions;
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const currentTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Container>
      <Layout>
        <TransactionsGrid>
          {currentTransactions.map((transaction, index) => (
            <TransactionCard key={index} type={transaction.transaction_type}>
              <CardHeader>
                <CardTitle>{transaction.account}</CardTitle>
                <CardSubtitle>{transaction.industry}</CardSubtitle>
              </CardHeader>
              <Amount type={transaction.transaction_type}>
                {transaction.currency.toUpperCase()} {transaction.amount}
              </Amount>
              <CardFooter>
                <span>{new Date(transaction.date).toLocaleDateString()}</span>
                <span>{transaction.state}</span>
              </CardFooter>
            </TransactionCard>
          ))}
        </TransactionsGrid>
        <PaginationContainer>
          <ArrowButton onClick={handlePrevPage} disabled={currentPage === 1}>
            &#9664;
          </ArrowButton>
          <span>{currentPage} / {totalPages}</span>
          <ArrowButton onClick={handleNextPage} disabled={currentPage === totalPages}>
            &#9654;
          </ArrowButton>
        </PaginationContainer>
      </Layout>
      <FilterContainer>
        <FilterComponent />
      </FilterContainer>
    </Container>
  );
};

export default TransactionsPageComponent;