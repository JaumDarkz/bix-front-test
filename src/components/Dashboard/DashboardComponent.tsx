'use client'

import { useEffect, useState } from 'react';

interface Transaction {
  date: number;
  amount: string;
  transaction_type: string;
  currency: string;
  account: string;
  industry: string;
  state: string;
}

const DashboardComponent = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [filters, setFilters] = useState({ type: '', state: '' });

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions');
      const data: Transaction[] = await response.json();
      setTransactions(data);
      setFilteredTransactions(data);
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = transactions.filter(transaction => {
        const matchesType = filters.type ? transaction.transaction_type === filters.type : true;
        const matchesState = filters.state ? transaction.state === filters.state : true;
        return matchesType && matchesState;
      });
      setFilteredTransactions(filtered);
    };

    applyFilters();
  }, [filters, transactions]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <label>
          Transaction Type:
          <select name="type" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </label>

        <label>
          State:
          <select name="state" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="TX">Texas</option>
            <option value="NY">New York</option>
            <option value="NV">Nevada</option>
          </select>
        </label>
      </div>

      <ul>
        {filteredTransactions.map(transaction => (
          <li key={transaction.date}>
            {new Date(transaction.date).toLocaleDateString()} - {transaction.transaction_type} {transaction.amount} {transaction.currency} ({transaction.account}, {transaction.industry}, {transaction.state})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardComponent;