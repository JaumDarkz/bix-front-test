import React, { FC, useMemo } from 'react';
import { useFilter } from '../../contexts/FilterContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FilterContainer,
  Title,
  FieldContainer,
  Label,
  DatePickerStyled,
  Select,
  InputsContainer,
} from './FilterComponent.styles';
import Image from 'next/image';
import { filterIcon } from '@/lib/constants';

const FilterComponent: FC = () => {
  const { filters, setFilters, filteredData, availableDates } = useFilter();

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    setFilters({ ...filters, dateRange: dates });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value || undefined });
  };

  const isDateSelectable = (date: Date) => {
    return availableDates.some(availableDate =>
      availableDate.toDateString() === date.toDateString()
    );
  };

  const dynamicFilterOptions = useMemo(() => {
    const accountSet = new Set<string>();
    const industrySet = new Set<string>();
    const stateSet = new Set<string>();

    filteredData.forEach(transaction => {
      if (transaction.account) accountSet.add(transaction.account);
      if (transaction.industry) industrySet.add(transaction.industry);
      if (transaction.state) stateSet.add(transaction.state);
    });

    return {
      accounts: Array.from(accountSet),
      industries: Array.from(industrySet),
      states: Array.from(stateSet)
    };
  }, [filteredData]);

  return (
    <FilterContainer>
      <Title><Image src={filterIcon} alt='Icon' width={24} height={24} /> Filters</Title>
      <InputsContainer>
        <FieldContainer>
          <Label>Date Range:</Label>
          <DatePickerStyled>
            <DatePicker
              selectsRange
              startDate={filters.dateRange[0] || undefined}
              endDate={filters.dateRange[1] || undefined}
              onChange={handleDateChange}
              className="form-input"
              placeholderText="Select date range"
              filterDate={isDateSelectable}
              maxDate={availableDates[0]}
              minDate={availableDates[availableDates.length - 1]}
            />
          </DatePickerStyled>
        </FieldContainer>
        <FieldContainer>
          <Label>Account:</Label>
          <Select 
            name="account" 
            value={filters.account || ''} 
            onChange={handleSelectChange}
          >
            <option value="">All</option>
            {dynamicFilterOptions.accounts.map(account => (
              <option key={account} value={account}>
                {account}
              </option>
            ))}
          </Select>
        </FieldContainer>
        <FieldContainer>
          <Label>Industry:</Label>
          <Select 
            name="industry" 
            value={filters.industry || ''} 
            onChange={handleSelectChange}
          >
            <option value="">All</option>
            {dynamicFilterOptions.industries.map(industry => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </Select>
        </FieldContainer>
        <FieldContainer>
          <Label>State:</Label>
          <Select 
            name="state" 
            value={filters.state || ''} 
            onChange={handleSelectChange}
          >
            <option value="">All</option>
            {dynamicFilterOptions.states.map(state => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </FieldContainer>
      </InputsContainer>
    </FilterContainer>
  );
};

export default FilterComponent;