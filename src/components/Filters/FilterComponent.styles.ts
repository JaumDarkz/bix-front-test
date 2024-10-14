import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

export const FieldContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 0.25rem;
`;

export const DatePickerStyled = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid #cbd5e0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    outline: none;
    font-size: 1rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #cbd5e0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  outline: none;
  font-size: 1rem;

  option:disabled {
    color: #a0aec0;
  }
`;