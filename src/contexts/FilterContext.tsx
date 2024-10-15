// src/contexts/FilterContext.tsx
import { Transaction } from '@/lib/dto';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface FilterContextProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  filteredData: Transaction[];
  filterOptions: FilterOptions;
  availableDates: Date[];
}

interface Filters {
  dateRange: [Date | null, Date | null];
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
  const [filters, setFilters] = useState<Filters>(() => {
    if (typeof window !== 'undefined') {
      const storedFilters = localStorage.getItem('filters');
      if (storedFilters) {
        const parsedFilters = JSON.parse(storedFilters);
        if (parsedFilters.dateRange) {
          parsedFilters.dateRange = parsedFilters.dateRange.map((date: string | null) => date ? new Date(date) : null);
        }
        return parsedFilters;
      }
    }
    return { dateRange: [null, null] };
  });

  const availableDates = useMemo(() => {
    const dateSet = new Set<string>();
    transactions.forEach(t => dateSet.add(new Date(t.date).toISOString().split('T')[0]));
    return Array.from(dateSet).map(dateStr => new Date(dateStr)).sort((a, b) => b.getTime() - a.getTime());
  }, [transactions]);

  useEffect(() => {
    if (!filters.dateRange[0] && !filters.dateRange[1] && availableDates.length > 0) {
      const lastMonth = new Date(availableDates[0]);
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      setFilters(prev => ({
        ...prev,
        dateRange: [lastMonth, availableDates[0]]
      }));
    }
  }, [availableDates]);

  const filterOptions = useMemo(() => {
    const accountsSet = new Set<string>();
    const industriesSet = new Set<string>();
    const statesSet = new Set<string>();

    transactions.forEach(t => {
      if (t.account) accountsSet.add(t.account);
      if (t.industry) industriesSet.add(t.industry);
      if (t.state) statesSet.add(t.state);
    });

    return {
      accounts: Array.from(accountsSet),
      industries: Array.from(industriesSet),
      states: Array.from(statesSet)
    };
  }, [transactions]);

  const filteredData = useMemo(() => {
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return (
        (!filters.dateRange[0] || transactionDate >= filters.dateRange[0]) &&
        (!filters.dateRange[1] || transactionDate <= filters.dateRange[1]) &&
        (!filters.account || transaction.account === filters.account) &&
        (!filters.industry || transaction.industry === filters.industry) &&
        (!filters.state || transaction.state === filters.state)
      );
    });
  }, [filters, transactions]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('filters', JSON.stringify(filters));
    }
  }, [filters]);

  return (
    <FilterContext.Provider value={{ filters, setFilters, filteredData, filterOptions, availableDates }}>
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
