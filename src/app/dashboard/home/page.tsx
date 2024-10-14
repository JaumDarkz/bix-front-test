'use client'

import DashboardComponent from '@/components/Dashboard/DashboardComponent';
import { transactionsData } from '@/lib/constants';
import { FilterProvider } from '@/contexts/FilterContext';

const DashboardPage = () => {
  return (
    <FilterProvider transactions={transactionsData}>
      <DashboardComponent />
    </FilterProvider>
  );
};

export default DashboardPage;