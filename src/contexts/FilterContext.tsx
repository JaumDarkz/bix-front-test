import { Transaction } from '@/lib/dto';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface FilterContextProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  filteredData: Transaction[];
  filterOptions: FilterOptions;
}

interface Filters {
  dateRange?: [Date | null, Date | null];
  account?: string;
  industry?: string;
  state?: string;
}

interface FilterOptions {
  accounts: string[];
  industries: string[];
  states: string[];
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider: React.FC<{ transactions: Transaction[]; children: React.ReactNode }> = ({ children, transactions }) => {
  const [filters, setFilters] = useState<Filters>({});
  const [filteredData, setFilteredData] = useState(transactions);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    accounts: [],
    industries: [],
    states: []
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFilters = localStorage.getItem('filters');
      if (storedFilters) {
        const parsedFilters = JSON.parse(storedFilters);
        if (parsedFilters.dateRange) {
          parsedFilters.dateRange = parsedFilters.dateRange.map((date: string | null) => date ? new Date(date) : null);
        }
        setFilters(parsedFilters);
      }
    }

    const accountsSet = new Set<string>();
    const industriesSet = new Set<string>();
    const statesSet = new Set<string>();

    transactions.forEach(t => {
      if (t.account) accountsSet.add(t.account);
      if (t.industry) industriesSet.add(t.industry);
      if (t.state) statesSet.add(t.state);
    });

    setFilterOptions({
      accounts: Array.from(accountsSet),
      industries: Array.from(industriesSet),
      states: Array.from(statesSet)
    });
  }, [transactions]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('filters', JSON.stringify(filters));
    }

    let newFilteredData = transactions;

    if (filters.dateRange && filters.dateRange[0] && filters.dateRange[1]) {
      const [startDate, endDate] = filters.dateRange;
      newFilteredData = newFilteredData.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return (
          transactionDate >= startDate! &&
          transactionDate <= endDate!
        );
      });
    }

    if (filters.account) {
      newFilteredData = newFilteredData.filter(transaction => transaction.account === filters.account);
    }

    if (filters.industry) {
      newFilteredData = newFilteredData.filter(transaction => transaction.industry === filters.industry);
    }

    if (filters.state) {
      newFilteredData = newFilteredData.filter(transaction => transaction.state === filters.state);
    }

    setFilteredData(newFilteredData);
  }, [filters, transactions]);

  return (
    <FilterContext.Provider value={{ filters, setFilters, filteredData, filterOptions }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
