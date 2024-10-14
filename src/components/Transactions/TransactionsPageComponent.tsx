"use client"

import { useState } from 'react';
import { transactionsData } from '@/lib/constants';
import {
  Container,
  Title,
  TransactionsGrid,
  TransactionCard,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Amount,
  CardFooter,
  PaginationContainer,
  PaginationButton,
} from './TransactionsPageComponent.styles';

export interface Transaction {
  date: number;
  amount: string;
  transaction_type: 'deposit' | 'withdrawal';
  currency: string;
  account: string;
  industry: string;
  state: string;
}

const TransactionsPageComponent = () => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  
  const transactions: Transaction[] = transactionsData.map((transaction: Transaction) => ({
    ...transaction,
    transaction_type: transaction.transaction_type as 'deposit' | 'withdrawal',
  }));

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const currentTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Title>Transaction History</Title>
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
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationButton
            key={index}
            isActive={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </Container>
  );
};

export default TransactionsPageComponent;
