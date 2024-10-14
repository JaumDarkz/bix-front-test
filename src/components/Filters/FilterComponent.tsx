import React, { FC, useEffect, useState } from 'react';
import { useFilter } from '../../contexts/FilterContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Container,
  Title,
  FieldContainer,
  Label,
  DatePickerStyled,
  Select,
} from './FilterComponent.styles';

const FilterComponent: FC = () => {
  const { filters, setFilters, filterOptions, filteredData } = useFilter();

  const [availableAccounts, setAvailableAccounts] = useState<string[]>([]);
  const [availableIndustries, setAvailableIndustries] = useState<string[]>([]);
  const [availableStates, setAvailableStates] = useState<string[]>([]);

  useEffect(() => {
    const filteredByAccount = new Set<string>();
    const filteredByIndustry = new Set<string>();
    const filteredByState = new Set<string>();

    filteredData.forEach(transaction => {
      if (!filters.account || transaction.account === filters.account) {
        filteredByIndustry.add(transaction.industry);
        filteredByState.add(transaction.state);
      }
      if (!filters.industry || transaction.industry === filters.industry) {
        filteredByAccount.add(transaction.account);
        filteredByState.add(transaction.state);
      }
      if (!filters.state || transaction.state === filters.state) {
        filteredByAccount.add(transaction.account);
        filteredByIndustry.add(transaction.industry);
      }
    });

    setAvailableAccounts(Array.from(filteredByAccount));
    setAvailableIndustries(Array.from(filteredByIndustry));
    setAvailableStates(Array.from(filteredByState));
  }, [filters, filteredData]);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    setFilters({ ...filters, dateRange: dates });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value || undefined });
  };

  return (
    <Container>
      <Title>Filters</Title>
      <FieldContainer>
        <Label>Date Range:</Label>
        <DatePickerStyled>
          <DatePicker
            selectsRange={true}
            startDate={filters.dateRange?.[0]}
            endDate={filters.dateRange?.[1]}
            onChange={handleDateChange}
            className="form-input"
            placeholderText="Select date range"
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
          {filterOptions.accounts.map(account => (
            <option 
              key={account} 
              value={account}
              disabled={!availableAccounts.includes(account)}
            >
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
          {filterOptions.industries.map(industry => (
            <option 
              key={industry} 
              value={industry}
              disabled={!availableIndustries.includes(industry)}
            >
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
          {filterOptions.states.map(state => (
            <option 
              key={state} 
              value={state}
              disabled={!availableStates.includes(state)}
            >
              {state}
            </option>
          ))}
        </Select>
      </FieldContainer>
    </Container>
  );
};

export default FilterComponent;
